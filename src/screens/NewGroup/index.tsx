import { Header } from "@components/Header";
import { Container, FormContainer, Icon } from "./styles";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

export function NewGroup() {
  return (
    <Container>
      <Header showBackButton />

      <Icon />
      <Highlight
        title="Nova Turma"
        description="crie uma turma para adicionar pessoas"
      />

      <FormContainer>
        <Input placeholder="Nome da turma" />
        <Button title="Criar" />
      </FormContainer>
    </Container>
  );
}
