import { useState } from "react";

import { Container, FormContainer, Icon } from "./styles";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { groupCreate } from "@storage/group/groupCreate";

export function NewGroup() {
  const [group, setGroup] = useState("");

  const navigation = useNavigation();

  async function handleCreateNewGroup() {
    try {
      await groupCreate(group);
      navigation.navigate("players", { group });
    } catch (error) {
      console.log(error);
    }
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
