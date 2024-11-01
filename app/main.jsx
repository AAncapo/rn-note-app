import { FlatList, Pressable, StyleSheet, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";
import { Color, textStyle } from "../constants/colors";
import useNotes from "../hooks/useNotes";
import useDatabase from "../hooks/useDatabase";
import NoteCard from "../components/note-card";
import { AddIcon } from "../components/Icons";
import SearchBar from "../components/main/search-bar";
import SettingsButton from "../components/settings-button";

export default function Main() {
  const { config } = useDatabase();
  const { notes, addNote } = useNotes();

  return (
    <>
      <Stack.Screen
        options={{
          headerStyle: styles.header,
          headerTitle: "",
          header: () => (
            <View style={styles.header}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text style={[styles.text, styles.folderName]}>Notes</Text>
                <SettingsButton />
              </View>
              <SearchBar onSubmit={addNote} />
            </View>
          ),
        }}
      />
      <View style={{ flex: 1, backgroundColor: Color.bgPrimaryColor }}>
        <FlatList
          data={notes}
          renderItem={({ item }) => <NoteCard note={item} config={config[0]} />}
          contentContainerStyle={{ paddingVertical: 10 }}
        />
        <Pressable style={styles.addButton} onPress={addNote}>
          <AddIcon />
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  text: textStyle,
  header: {
    backgroundColor: Color.headerColor,
    padding: 10,
    paddingBottom: 0,
    marginTop: 50,
  },
  folderName: { fontWeight: "bold", fontSize: 40 },
  addButton: { position: "absolute", bottom: 10, right: 10 },
});
