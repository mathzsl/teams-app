import { ButtonIcon } from "@components/ButtonIcon";
import { Container, PlayerName, Prefix } from "./styles";

type PlayerCardProps = {
  name: string;
  onRemove: () => void;
};

export function PlayerCard({ name, onRemove }: PlayerCardProps) {
  return (
    <Container>
      <Prefix />
      <PlayerName>{name}</PlayerName>
      <ButtonIcon icon="close" variant="secondary" onPress={onRemove} />
    </Container>
  );
}
