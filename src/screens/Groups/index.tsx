import { useState } from "react";

import { Highlight } from "@components/Highlight";
import { Container, GroupList } from "./styles";
import { Header } from "@components/Header";
import { GroupCard } from "@components/GroupCard";

export function Groups() {
  const [groups, setGroups] = useState<string[]>([
    "Os Cuecas",
    "Gangue do Ovo",
    'Gangue dos Bananas'
  ]);

  return (
    <Container>
      <Header />

      <Highlight title="Turmas" description="jogue com a sua turma" />

      <GroupList
        showsVerticalScrollIndicator={false}
        data={groups}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => <GroupCard title={String(item)} />}
      />
    </Container>
  );
}
