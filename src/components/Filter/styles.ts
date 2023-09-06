import { TouchableOpacity } from "react-native";
import { styled, css } from "styled-components/native";

export type FilterStyleProps = {
  isActive?: boolean;
};

export const Container = styled(TouchableOpacity)<FilterStyleProps>`
  ${({ theme, isActive }) =>
    isActive &&
    css`
      border: 1px solid ${theme.COLORS.GREEN_700};
    `}

  width: 70px;
  height: 38px;
  border-radius: 4px;
  margin-right: 12px;

  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text<FilterStyleProps>`
  text-transform: uppercase;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_200};
  `}
`;
