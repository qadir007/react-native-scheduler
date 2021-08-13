import React from "react";
import { Text, View } from "react-native";

export default function Timeline() {
  const timelineItems = [];

  for (let index = 0; index < 48; index++) {
    timelineItems.push(
      <View
        key={index.toString()}
        style={{
          width: "100%",
          height: 60,
          alignItems: "center",
          borderBottomWidth: 1,
          borderBottomColor: "#eee",
        }}
      >
        <Text style={{ height: 30, fontSize: 10 }}>
          {index < 10 ? `0${index}:00` : `${index}:00`}
        </Text>
        <Text style={{ height: 30, fontSize: 10 }}>
          {index < 10 ? `0${index}:30` : `${index}:30`}
        </Text>
      </View>
    );
  }
  return (
    <View
      style={{
        height: 1440,
        marginTop: 100,
        borderTopWidth: 1,
        borderTopColor: "#ddd",
        width: 100,
        alignSelf: "flex-end",
      }}
    >
      {timelineItems}
    </View>
  );
}
