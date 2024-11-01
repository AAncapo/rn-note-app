import React, { createRef, useEffect } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import useNotes from "../hooks/useNotes";
import { Color } from "../constants/colors";
import SettingsButton from "../components/settings-button";
import { CheckboxIcon, ImageIcon } from "../components/Icons";
import useContent from "../hooks/useContent";
import ContentItem from "../components/content-item";

export default function Note() {
  const { id } = useLocalSearchParams();
  const { notes, updateNote } = useNotes();
  const note = notes.find((n) => n.id === id);
  const { contents, addItem, updateItem } = useContent(note);

  const titleInput = createRef();

  useEffect(() => {
    updateNote({ ...note, contents: contents });
  }, [contents]);

  const handleKeyPress = (item, key) => {
    if (key === "Enter") {
    }
    if (key === "Backspace") {
      // delete item if backspace
    }
  };

  return (
    <ScrollView
      contentContainerStyle={styles.scrollView}
      keyboardShouldPersistTaps={"handled"} // the default (never) interrupts the typeButton onPress. Now the keyboard won't hide auto when tap outside focused text. Use Keyboard.dismiss() to hide manually
    >
      <Stack.Screen
        options={{
          headerRight: () => <SettingsButton />,
          headerTitle: "",
          headerTintColor: Color.textPrimaryColor,
        }}
      />
      <View style={styles.container}>
        <TextInput
          ref={titleInput}
          numberOfLines={1}
          autoCorrect={false}
          style={styles.title}
          placeholder="Title"
          placeholderTextColor={Color.textSecondaryColor}
          defaultValue={note.title}
          onChangeText={(text) => {
            updateNote({ ...note, title: text });
          }}
          onSubmitEditing={() => {
            //TODO: focus contents[0]
          }}
          blurOnSubmit
        />
        <View style={styles.contentContainer}>
          {contents.map((item, index) => (
            <ContentItem
              key={index}
              item={item}
              onUpdate={updateItem}
              onKeyPress={handleKeyPress}
              expand={index === contents.length - 1}
            />
          ))}
        </View>
      </View>
      <View style={styles.typesBar}>
        <Pressable
          style={styles.typeButton}
          onPress={() => addItem({ type: "check" })}
        >
          <CheckboxIcon checked={true} />
        </Pressable>
        {/* <Pressable style={styles.typeButton}>
          <ImageIcon />
        </Pressable> */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: { flex: 1 },
  container: { flex: 1, padding: 10 },
  title: {
    outlineStyle: "none",
    fontSize: 20,
    fontWeight: "bold",
  },
  contentContainer: { flex: 1 },
  typesBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 50,
    backgroundColor: "white",
    bottom: 0,
  },
  typeButton: {
    // backgroundColor: "gray",
    // padding: 5,
    // paddingHorizontal: 10,
    // borderRadius: 5,
  },
});
