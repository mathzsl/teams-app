import { TouchableOpacity } from "react-native";
import { styled, css } from "styled-components/native";

export type ButtonTypeStyleProps = "primary" | "secondary";

type StyledProps = {
  variant: ButtonTypeStyleProps;
};

export const Container = styled(TouchableOpacity)<StyledProps>`
  width: 100%;
  height: 56px;
  border-radius: 6px;
  padding: 16px 24px;
  background-color: ${({ theme, variant }) =>
    variant === "primary" ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};
`;

export const Title = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.WHITE};
  `}
`;
