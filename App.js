import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./components/Home";
import { ThemeProvider } from "styled-components";
import BakeryList from "./components/BakeryList";
import BakeryDetail from "./components/BakeryDetail";
const theme = {
  light: {
    mainColor: "#242424", // main font color
    backgroundColor: "papayawhip", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
  dark: {
    mainColor: "#fefafb", // main font color
    backgroundColor: "#242424", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
};
export default function App() {
  return (
    <View style={styles.container}>
      <ThemeProvider theme={theme.light}>
        {/* <Home /> */}
        {/* <BakeryList /> */}
        <BakeryDetail />
      </ThemeProvider>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
