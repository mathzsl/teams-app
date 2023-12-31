import { styled, css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;

  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const Form = styled.View`
  border-radius: 6px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};

  flex-direction: row;
  gap: 8px;
`;

export const HeaderList = styled.View`
  margin: 30px 0 20px;

  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

export const NumberOfPlayer = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_300};
  `}
`;
