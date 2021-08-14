import React from "react";
import { Text, View } from "react-native";

export default function Timeline() {
  const timelineItems = [];

  for (let index = 0; index < 24; index++) {
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
        {index === 0 ? (
          <Text style={{ height: 15, fontSize: 10 }}>
            {index < 10 ? `0${index}:01` : `${index}:01`}
          </Text>
        ) : (
          <Text style={{ height: 15, fontSize: 10 }}>
            {index < 10 ? `0${index}:00` : `${index}:00`}
          </Text>
        )}

        <Text style={{ height: 15, fontSize: 7 }}>15mins</Text>
        <Text style={{ height: 15, fontSize: 7 }}>30mins</Text>
        <Text style={{ height: 15, fontSize: 7 }}>45mins</Text>
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
