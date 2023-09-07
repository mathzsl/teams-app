import { useState } from "react";

import { Container, FormContainer, Icon } from "./styles";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";

export function NewGroup() {
  const [group, setGroup] = useState("");

  const navigation = useNavigation();

  function handleCreateNewGroup() {
    navigation.navigate("players", { group });
  }

  return (
    <Container>
      <Header showBackButton />

      <Icon />
      <Highlight
        title="Nova Turma"
        description="crie uma turma para adicionar pessoas"
      />

      <FormContainer>
        <Input
          placeholder="Nome da turma"
          value={group}
          onChangeText={setGroup}
        />
        <Button title="Criar" onPress={handleCreateNewGroup} />
      </FormContainer>
    </Container>
  );
}
