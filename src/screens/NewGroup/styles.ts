import { SafeAreaView } from "react-native-safe-area-context";
import { ShieldHalf } from "lucide-react-native";
import { styled } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;

  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const Icon = styled(ShieldHalf).attrs(({ theme }) => ({
  color: theme.COLORS.GREEN_700,
  size: 56,
}))`
  margin-top: 50%;
  align-self: center;
`;

export const FormContainer = styled.View`
  gap: 20px;
`;
