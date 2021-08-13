import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";

export default function AppointmentItem({
  start,
  end,
  username,
  image,
  message,
  oldHeight,
}) {
  const height = end - start;
  const top = start - oldHeight.current;
  oldHeight.current = end;
  useEffect(() => {
    return () => {
      oldHeight.current = 0;
    };
  }, []);
  return (
    <View
      style={{
        height: height,
        marginTop: top,
        backgroundColor: "white",
        width: 220,
        padding: 5,
        borderWidth: 3,
        borderLeftWidth: 0,
        // borderTopWidth: 0,
        borderColor: "#eee",
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
      }}
    >
      <View style={{ flexDirection: "row", height: "100%" }}>
        <View
          style={{
            width: 6,
            height: "100%",
            backgroundColor: "#f89300",
            borderRadius: 20,
          }}
        />
        <View style={{ height: "100%", marginLeft: 10 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text>{`${convertToTimeFormat(start)} - ${convertToTimeFormat(
              end
            )}`}</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 10,
              }}
            >
              <Image
                source={image}
                style={{ height: 25, width: 25, borderRadius: 100 }}
              />
              <Text style={{ marginLeft: 5, fontWeight: "bold" }}>
                {username}
              </Text>
            </View>
          </View>
          <View>
            <Text>{message}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

function convertToTimeFormat(minutes) {
  let mins = 0;
  let hours = Math.round(minutes / 60);
  if (minutes % 60 !== 0) {
    mins = minutes % 60;
  }
  hours = hours < 10 ? `0${hours}` : `${hours}`;
  mins = mins < 10 ? `0${mins}` : `${mins}`;
  return `${hours}:${mins}`;
}
