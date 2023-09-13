import { useState, useCallback } from "react";
import { FlatList } from "react-native";

import { Container } from "./styles";

import { useNavigation, useFocusEffect } from "@react-navigation/native";

import { Highlight } from "@components/Highlight";
import { Header } from "@components/Header";
import { GroupCard } from "@components/GroupCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { groupsGetAll } from "@storage/group/groupsGetAll";

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);

  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate("new");
  }

  function handleOpenGroup(group: string) {
    navigation.navigate("players", { group });
  }

  async function fetchGroups() {
    try {
      const data = await groupsGetAll();
      setGroups(data);
    } catch (error) {
      console.log(error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchGroups();
    }, [])
  );

  return (
    <Container>
      <Header />

      <Highlight title="Turmas" description="jogue com a sua turma" />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={groups}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => (
          <GroupCard
            title={String(item)}
            onPress={() => handleOpenGroup(item)}
          />
        )}
        contentContainerStyle={!groups.length && { flex: 1, marginBottom: 20 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Ops, você não possui nenhum grupo cadastrado..." />
        )}
        style={{ marginBottom: 20 }}
      />

      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </Container>
  );
}
