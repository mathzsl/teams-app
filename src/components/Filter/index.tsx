import { TouchableOpacityProps } from "react-native";
import { Container, FilterStyleProps, Title } from "./styles";
import { useTheme } from "styled-components/native";

type FilterProps = TouchableOpacityProps &
  FilterStyleProps & {
    title: string;
  };

export function Filter({ title, isActive = false, ...rest }: FilterProps) {
  const { COLORS } = useTheme();

  return (
    <Container isActive={isActive} {...rest}>
      <Title style={isActive && { color: COLORS.WHITE }}>{title}</Title>
    </Container>
  );
}
