import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  Pressable,
  StyleSheet,
  TextInput,
  View,
  Text,
} from "react-native";
import { useState } from "react";
import { mockupNotes } from "./mockups/notes";
import NoteCard from "./components/note-card";

export default function App() {
  const [notes, setNotes] = useState(mockupNotes);
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search or create"
        onSubmitEditing={() => {
          // Creare note with text as title if not found
        }}
        style={styles.searchInput}
      ></TextInput>
      <View style={{ flexDirection: "row", gap: 5, paddingStart: 20 }}>
        <Pressable style={styles.filter}>
          <Text style={{ textAlign: "center" }}>typescript</Text>
        </Pressable>
        <Pressable style={styles.filter}>
          <Text style={{ textAlign: "center" }}>web</Text>
        </Pressable>
        <Pressable style={styles.filter}>
          <Text style={{ textAlign: "center" }}>mobile</Text>
        </Pressable>
        <Pressable style={styles.filter}>
          <Text style={{ textAlign: "center" }}>projects</Text>
        </Pressable>
      </View>
      <View>
        <FlatList
          data={notes}
          renderItem={({ item }) => <NoteCard {...item} />}
          contentContainerStyle={{
            paddingHorizontal: 10,
            gap: 10,
            paddingVertical: 10,
          }}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: "#fff",
  },
  searchInput: {
    backgroundColor: "#b5b8ba9d",
    borderRadius: 10,
    paddingHorizontal: 10,
    margin: 10,
    marginBottom: 10,
  },
  filter: {
    backgroundColor: "#33a9f7bb",
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 8,
  },
});
