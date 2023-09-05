import { TouchableOpacity } from "react-native";
import { styled } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export type ButtonIconTypeStyleProps = "primary" | "secondary";

type StyledProps = {
  variant: ButtonIconTypeStyleProps;
};

export const Container = styled(TouchableOpacity)`
  width: 56px;
  height: 56px;

  align-items: center;
  justify-content: center;
`;

export const Icon = styled(MaterialIcons).attrs<StyledProps>(
  ({ theme, variant }) => ({
    size: 24,
    color:
      variant === "primary" ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK,
  })
)``;
