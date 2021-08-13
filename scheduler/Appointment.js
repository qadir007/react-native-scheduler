import React, { useEffect } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import AppointmentItem from "./AppointmentItem";

export default function Appointment({
  oldHeight,
  image,
  username,
  appointments,
}) {
  useEffect(() => {
    oldHeight.current = 0;
    return () => {
      oldHeight.current = 0;
    };
  }, []);
  return (
    <View style={{ height: 1540, width: 250 }}>
      <AppointmentUser image={image} username={username} />
      <View
        style={{
          height: 1440,
          borderWidth: 1,
          borderColor: "#ddd",
        }}
      >
        <FlatList
          data={appointments}
          keyExtractor={(item) => item.id.toString()}
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <AppointmentItem
                key={item.id}
                start={item.start}
                end={item.end}
                username={item.username}
                image={item.image}
                message={item.message}
                oldHeight={oldHeight}
              />
            );
          }}
        />
      </View>
    </View>
  );
}

function AppointmentUser({ image, username }) {
  return (
    <View
      style={{
        height: 100,
        width: "100%",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "60%",
          borderRightWidth: 1,
          borderRightColor: "#aaa",
        }}
      >
        <Image
          source={image}
          style={{ height: 35, width: 35, borderRadius: 100 }}
        />
        <Text style={{ marginLeft: 10, fontSize: 20, fontWeight: "bold" }}>
          {username}
        </Text>
      </View>
    </View>
  );
}
