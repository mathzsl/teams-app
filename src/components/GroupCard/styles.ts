import { styled } from "styled-components/native";
import { ShieldHalf } from "lucide-react-native";
import { TouchableOpacity } from "react-native";

export const Container = styled(TouchableOpacity)`
  height: 96px;
  padding: 32px 24px;
  border-radius: 6px;
  margin-bottom: 12px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};

  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

export const Title = styled.Text.attrs(() => ({
  ellipsizeMode: "tail",
  numberOfLines: 2,
}))`
  flex: 1;
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const Icon = styled(ShieldHalf).attrs(({ theme }) => ({
  color: theme.COLORS.GREEN_700,
  height: 32,
}))``;
