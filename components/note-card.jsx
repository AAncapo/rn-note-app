import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function NoteCard(data) {
  return (
    <Pressable
      onPress={() => {
        console.log(data.title);
      }}
    >
      <View
        style={{
          borderBottomWidth: 2,
          borderColor: "#b5b8ba9d",
          paddingBottom: 10,
        }}
      >
        <Text numberOfLines={1} style={{ fontWeight: "bold" }}>
          {data.title}
        </Text>
        <Text numberOfLines={2} style={{ marginBottom: 5 }}>
          {data.content}
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row", gap: 10 }}>
            {data.tags.map((tag, index) => (
              <Text key={tag + index}>{tag}</Text>
            ))}
          </View>
          <Text>{data.created_at}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({});
