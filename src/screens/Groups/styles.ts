import { styled } from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  padding: 42px 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;
