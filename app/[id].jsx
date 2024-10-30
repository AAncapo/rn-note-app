import React, { createRef, useEffect } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import SettingsButton from "../components/settings-button";
import { Color } from "../constants/colors";
import useNotes from "../hooks/useNotes";

export default function Note() {
  const { id } = useLocalSearchParams();
  const { notes, updateNote } = useNotes();
  const note = notes.find((n) => n.id === id);

  const titleInput = createRef();
  const contentInput = createRef();

  useEffect(() => {
    titleInput.current.focus();
  }, []);

  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <Stack.Screen
        options={{
          headerRight: () => <SettingsButton />,
          headerTitle: "",
          headerTintColor: Color.textPrimaryColor,
        }}
      />
      <View style={{ flex: 1, padding: 10 }}>
        <TextInput
          // multiline
          ref={titleInput}
          numberOfLines={1}
          autoCorrect={false}
          style={styles.title}
          placeholder="Title (Press Enter to jump to the content)"
          placeholderTextColor={Color.textSecondaryColor}
          defaultValue={note.title}
          onChangeText={(text) => {
            updateNote({ ...note, title: text });
          }}
          onSubmitEditing={() => {
            contentInput.current.focus();
          }}
          blurOnSubmit
        />
        <TextInput
          ref={contentInput}
          multiline
          autoCorrect={false}
          style={styles.content}
          placeholder="Write some content..."
          defaultValue={note.content}
          onChangeText={(text) => {
            updateNote({ ...note, content: text });
          }}
          onKeyPress={(e) => {
            const keyValue = e.nativeEvent.key;
            if (keyValue === "Enter") {
              console.log(keyValue);
            }
          }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          height: 50,
          backgroundColor: "white",
          bottom: 0,
        }}
      >
        <Text>AYOOOOO</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    outlineStyle: "none",
    fontSize: 20,
    fontWeight: "bold",
  },
  content: { flex: 1, outlineStyle: "none", fontSize: 16 },
});
