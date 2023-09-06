import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { NavigationContainer } from "@react-navigation/native";

import theme from "./src/theme";

import { Loading } from "@components/Loading";

import { AppRoutes } from "@routes/app.routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="inverted" />
      <NavigationContainer>
        {!fontsLoaded ? <Loading /> : <AppRoutes />}
      </NavigationContainer>
    </ThemeProvider>
  );
}
