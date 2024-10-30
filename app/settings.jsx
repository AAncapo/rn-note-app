import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Stack } from "expo-router";
import { defaultConfig } from "../config";

export default function Settings() {
  const [userSettings, setUserSettings] = useState(defaultConfig);
  useEffect(() => {
    setUserSettings(defaultConfig);
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen
        options={{ headerTitle: "Settings", headerTitleAlign: "center" }}
      />
      <FlatList
        data={userSettings}
        renderItem={({ item }) => {
          <View>
            <Text>{item.title}</Text>
          </View>;
        }}
      />
      {/* <View>{userSettings.map((cfg) => {
        for (const key in object) {
          if (Object.prototype.hasOwnProperty.call(object, key)) {
            const element = object[key];
            
          }
        }
      })}</View> */}
    </View>
  );
}
const styles = StyleSheet.create({});
