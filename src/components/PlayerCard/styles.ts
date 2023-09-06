import { User2 } from "lucide-react-native";
import { styled, css } from "styled-components/native";

export const Container = styled.View`
  height: 54px;
  padding: 16px 0 16px 16px;
  border-radius: 6px;
  margin-bottom: 16px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};

  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const Prefix = styled(User2).attrs(({ theme }) => ({
  color: theme.COLORS.GRAY_200,
  size: 24,
}))``;

export const PlayerName = styled.Text.attrs(() => ({
  numberOfLines: 1,
}))`
  flex: 1;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;
