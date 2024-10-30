import { StyleSheet, View } from "react-native";
import React from "react";
import { TagIcon, ArrowIcon } from "../Icons";

export default function Filters({ visible, setVisible }) {
  return (
    <View style={{ flexDirection: "row", paddingBottom: 10 }}>
      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 10,
          gap: 5,
        }}
        onPress={() => {
          setVisible(!visible);
          //   setFiltersVisible(!filtersVisible);
        }}
      >
        <TagIcon />
        <ArrowIcon name={visible ? "arrow-back-ios" : "arrow-forward-ios"} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({});
