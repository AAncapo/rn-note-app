import React from "react";
import { Platform, Pressable, StyleSheet, TextInput, View } from "react-native";
import useGlobal from "../hooks/useGlobal";
import { CheckboxIcon } from "./Icons";

export default function ContentItem({ item, onUpdate, onKeyPress, expand }) {
  const { setCurrentFocus, setCurrentText, setCurrentSelection } = useGlobal();

  return (
    <View style={[styles.container, { flex: 1 }]}>
      {item.type === "check" && (
        <Pressable
          onPress={() => {
            item.checked = !item.checked;
            onUpdate(item);
          }}
        >
          <CheckboxIcon checked={item.checked} />
        </Pressable>
      )}
      <TextInput
        multiline
        defaultValue={item.text}
        autoCorrect={false}
        textAlignVertical="top"
        placeholder={item.type}
        placeholderTextColor={"gray"}
        onKeyPress={(e) => {
          if (
            e.nativeEvent.key === "Enter" ||
            e.nativeEvent.key === "Backspace"
          )
            onKeyPress(item, e.nativeEvent.key);
        }}
        onFocus={() => setCurrentFocus(item.id)}
        onBlur={() => {
          //FIXME: no pincha igual en web :/
          if (Platform.OS === "web") return;
          setCurrentFocus(null);
          setCurrentSelection({ start: null, end: null });
          setCurrentText(null);
        }}
        onSelectionChange={(e) => setCurrentSelection(e.nativeEvent.selection)}
        onChangeText={(text) => setCurrentText(text)}
        style={expand ? [styles.textInput, { flex: 1 }] : styles.textInput}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: "row", gap: 10 },
  textInput: { outlineStyle: "none", fontSize: 16 },
});
