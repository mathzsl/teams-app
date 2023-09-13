import { useState } from "react";
import { Alert } from "react-native";

import { AppError } from "@utils/AppError";

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
      if (!group.trim()) {
        return Alert.alert("Novo grupo", "Informe o nome da turma.");
      }

      await groupCreate(group);
      navigation.navigate("players", { group });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Novo grupo", error.message);
      } else {
        Alert.alert("Novo grupo", "Não foi possível criar um novo grupo.");
        console.log(error);
      }
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
