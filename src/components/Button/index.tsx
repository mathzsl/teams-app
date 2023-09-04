import { TouchableOpacityProps } from "react-native";
import { ButtonTypeStyleProps, Container, Title } from "./styles";

type ButtonProps = TouchableOpacityProps & {
  title: string;
  variant?: ButtonTypeStyleProps;
};

export function Button({ title, variant = "primary", ...rest }: ButtonProps) {
  return (
    <Container {...rest} variant={variant}>
      <Title>{title}</Title>
    </Container>
  );
}
