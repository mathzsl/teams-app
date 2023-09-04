import { styled } from "styled-components/native";
import { ChevronLeft } from "lucide-react-native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  width: 45px;
  height: 55px;
`;

export const BackButton = styled.TouchableOpacity`
  margin-right: auto;
`;

export const BackIcon = styled(ChevronLeft).attrs(({ theme }) => ({
  color: theme.COLORS.WHITE,
  size: 32,
}))``;
