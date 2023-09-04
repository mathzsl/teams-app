import { useState } from "react";

import { Highlight } from "@components/Highlight";
import { Container } from "./styles";
import { Header } from "@components/Header";
import { GroupCard } from "@components/GroupCard";
import { ListEmpty } from "@components/ListEmpty";
import { FlatList } from "react-native";

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);

  return (
    <Container>
      <Header />

      <Highlight title="Turmas" description="jogue com a sua turma" />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={groups}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => <GroupCard title={String(item)} />}
        contentContainerStyle={!groups.length && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Ops, você não possui nenhum grupo cadastrado..." />
        )}
      />
    </Container>
  );
}
