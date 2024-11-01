import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { PinIcon } from "./Icons";
import { textStyle } from "../constants/colors";
import { Link } from "expo-router";
import useGlobal from "../hooks/useGlobal";

export default function NoteCard({ note, config }) {
  return (
    <Link asChild href={`/${note.id}`}>
      <Pressable
        onPress={() => {
          console.log(note.title);
        }}
        style={styles.container}
      >
        <View style={styles.wrapper}>{note.pinned && <PinIcon />}</View>
        {/* //Unpinned: name="pin" */}
        <View style={styles.preview}>
          <Text numberOfLines={1} style={styles.title}>
            {note.title}
          </Text>
          {/* {config.showContent && (
            <Text numberOfLines={config.numberOfLines} style={styles.content}>
              {note.content}
            </Text>
          )} */}
          <View style={styles.footer}>
            {config.showTags && (
              <View style={styles.tags}>
                {note.tags.map((tag, index) => (
                  <Text key={tag + index} style={textStyle}>
                    {tag}
                  </Text>
                ))}
              </View>
            )}
            {config.showCreated && (
              <Text style={styles.created}>{note.createdAt}</Text>
            )}
          </View>
        </View>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: 5, flexDirection: "row" },
  wrapper: {
    width: 28,
    marginTop: 6,
    // marginHorizontal: "auto",
  },
  title: [textStyle, { fontWeight: "bold", fontSize: 20 }],
  content: [
    textStyle,
    {
      fontWeight: "semibold",
      marginBottom: 5,
      fontSize: 16,
      opacity: 0.5,
    },
  ],
  preview: {
    borderBottomWidth: 2,
    borderColor: "#F2F2F2",
    paddingBottom: 10,
    flexShrink: 1,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tags: { flexDirection: "row", gap: 10, fontSize: 12 },
  created: [textStyle, { fontSize: 12 }],
});
