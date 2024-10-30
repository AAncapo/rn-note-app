import { Stack } from "expo-router";
import { StyleSheet, View } from "react-native";
import { Color } from "../constants/colors";
import { DatabaseProvider } from "../context/database-context";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [loaded, error] = useFonts({
    "Instrument Sans": require("../assets/fonts/InstrumentSans-VariableFont_wdth,wght.ttf"),
  });
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);
  if (!loaded && !error) return null;

  return (
    <DatabaseProvider>
      <View style={styles.container}>
        <Stack
          screenOptions={{
            headerStyle: { backgroundColor: Color.headerColor },
            headerShadowVisible: true,
            contentStyle: { flex: 1, backgroundColor: Color.bgPrimaryColor },
          }}
        />
      </View>
    </DatabaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginTop: 50,
    flex: 1,
    // backgroundColor: Color.bgPrimaryColor,
  },
});
