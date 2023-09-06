import { useState } from "react";
import { FlatList } from "react-native";

import { Container, Form, HeaderList, HeaderListCount } from "./styles";

import { ButtonIcon } from "@components/ButtonIcon";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { PlayerCard } from "@components/PlayerCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

export function Players() {
  const [team, setTeam] = useState("");
  const [players, setPlayers] = useState<string[]>(['Matheus', 'Yasmin', 'Alguma pessoa', 'Hmmm', 'Mais outra', 'Outra pra testar']);

  const countPlayers = players.length;

  return (
    <Container>
      <Header showBackButton />

      <Highlight
        title="Nome da turma"
        description="adicione a galera e separe os times"
      />

      <Form>
        <Input placeholder="Nome do participante" autoCorrect={false} />
        <ButtonIcon icon="add" />
      </Form>

      <HeaderList>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={["Time A", "Time B", "Time C", "Time D", "Time f"]}
          keyExtractor={(item) => String(item)}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
        />

        <HeaderListCount>{countPlayers}</HeaderListCount>
      </HeaderList>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={players}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => {}} />
        )}
        contentContainerStyle={!players.length && { flex: 1, marginBottom: 20 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Não há pessoas nesse time." />
        )}
        style={{marginBottom: 20}} 
      />

      <Button title="Remover turma" variant="secondary" />
    </Container>
  );
}
