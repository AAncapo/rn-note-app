import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import { SearchIcon } from "../Icons";

export default function SearchBar({ onSubmit }) {
  return (
    <View style={styles.searchInput}>
      <SearchIcon />
      <TextInput
        placeholder="Search or create"
        onSubmitEditing={(e) => {
          e.preventDefault();
          // Creare note with text as title if not found
          onSubmit({ _title: e.nativeEvent.text });
          // e.target.blur();
        }}
        style={{ fontSize: 20 }}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  searchInput: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    marginBottom: 10,
    gap: 8,
    backgroundColor: "#EFEFEF",
    borderRadius: 10,
    height: 40,
    opacity: 0.5,
  },
});
