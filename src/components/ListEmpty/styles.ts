import { styled } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const Message = styled.Text`
  text-align: center;
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_300};
`;
