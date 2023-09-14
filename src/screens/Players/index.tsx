import { useState, useEffect, useRef } from "react";
import { Alert, FlatList, TextInput } from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";

import { AppError } from "@utils/AppError";

import { PlayerAddByGroup } from "@storage/players/playerAddByGroup";
import { PlayerStorageDTO } from "@storage/players/PlayerStorageDTO";
import { getPlayersByGroupAndTeam } from "@storage/players/getPlayersByGroupAndTeam";
import { playerRemoveByGroup } from "@storage/players/playerRemoveByGroup";
import { removeGroupByName } from "@storage/group/removeGroupByName";

import { Container, Form, HeaderList, NumberOfPlayer } from "./styles";

import { ButtonIcon } from "@components/ButtonIcon";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { PlayerCard } from "@components/PlayerCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

type RouteParams = {
  group: string;
};

export function Players() {
  const [newPlayerName, setNewPlayerName] = useState("");
  const [team, setTeam] = useState("Time A");
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);

  const route = useRoute();
  const { group } = route.params as RouteParams;

  const navigation = useNavigation();

  const countPlayers = players.length;

  const newPlayerInputRef = useRef<TextInput>(null);

  async function handleAddPlayer() {
    if (!newPlayerName.trim()) {
      return Alert.alert("Novo jogador", "Informe o nome do jogador.");
    }

    const newPlayer: PlayerStorageDTO = {
      name: newPlayerName,
      team,
    };

    try {
      await PlayerAddByGroup(newPlayer, group);

      newPlayerInputRef.current?.blur();

      setNewPlayerName("");
      fetchPlayersByTeam();
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Novo jogador", error.message);
      } else {
        console.log(error);
        Alert.alert("Novo jogador", "Não foi possível adicionar.");
      }
    }
  }

  async function handleRemovePlayer(playerName: string) {
    try {
      await playerRemoveByGroup(group, playerName);
      fetchPlayersByTeam();
    } catch (error) {
      console.log(error);
      Alert.alert("Remover jogador", "Não foi possível remover o jogador.");
    }
  }

  async function RemoveGroup() {
    try {
      await removeGroupByName(group);
      navigation.navigate("groups");
    } catch (error) {
      console.log(error);
      Alert.alert("Remover grupo", "Não foi possível remover o grupo.");
    }
  }

  async function handleRemoveGroup() {
    Alert.alert("Remover grupo", `Deseja remover o grupo ${group}?`, [
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "Remover",
        onPress: RemoveGroup,
      },
    ]);
  }

  async function fetchPlayersByTeam() {
    try {
      const playersByTeam = await getPlayersByGroupAndTeam(group, team);
      setPlayers(playersByTeam);
    } catch (error) {
      console.log(error);
      Alert.alert(
        "Jogadores",
        "Não foi possível carregar os jogadores do time selecionado."
      );
    }
  }

  useEffect(() => {
    fetchPlayersByTeam();
  }, [team]);

  return (
    <Container>
      <Header showBackButton />

      <Highlight
        title={group}
        description="adicione a galera e separe os times"
      />

      <Form>
        <Input
          inputRef={newPlayerInputRef}
          placeholder="Nome do participante"
          autoCorrect={false}
          value={newPlayerName}
          onChangeText={setNewPlayerName}
          onSubmitEditing={handleAddPlayer}
          returnKeyType="done"
        />
        <ButtonIcon icon="add" onPress={handleAddPlayer} />
      </Form>

      <HeaderList>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={["Time A", "Time B"]}
          keyExtractor={(item) => String(item)}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
        />

        <NumberOfPlayer>{countPlayers}</NumberOfPlayer>
      </HeaderList>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={players}
        keyExtractor={(item) => String(item.name)}
        renderItem={({ item }) => (
          <PlayerCard
            name={item.name}
            onRemove={() => handleRemovePlayer(item.name)}
          />
        )}
        contentContainerStyle={!players.length && { flex: 1, marginBottom: 20 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Não há pessoas nesse time." />
        )}
        style={{ marginBottom: 20 }}
      />

      <Button
        title="Remover turma"
        variant="secondary"
        onPress={handleRemoveGroup}
      />
    </Container>
  );
}
