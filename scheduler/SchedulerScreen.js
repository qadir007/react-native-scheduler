import React from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Appointment from "./Appointment";
import Timeline from "./Timeline";

const data = [
  {
    id: 1,
    username: "Abdul Qadir",
    image: require("./user.jpg"),
    appointments: [
      {
        id: 1,
        start: 120, // meants 120 minutes = 02:00 = ((new Date().getHours()) * 60) + new Date().getMinutes(),
        end: 180, // meants 180 minutes = 03:00 = ((new Date().getHours()) * 60) + new Date().getMinutes(),
        username: "Karim",
        message: "teach him react natie",
      },
      {
        id: 2,
        start: 240, // meants 240 minutes = 04:00 = ((new Date().getHours()) * 60) + new Date().getMinutes(),
        end: 360, // meants 180 minutes = 06:00 = ((new Date().getHours()) * 60) + new Date().getMinutes(),
        username: "Kamal",
        message: "play game with him",
      },
    ],
  },
  {
    id: 2,
    username: "Abdul Qadir",
    image: require("./user.jpg"),
    appointments: [
      {
        id: 1,
        start: 120, // meants 120 minutes = 02:00 = ((new Date().getHours()) * 60) + new Date().getMinutes(),
        end: 180, // meants 180 minutes = 03:00 = ((new Date().getHours()) * 60) + new Date().getMinutes(),
        username: "Karim",
        image: require("./user.jpg"),
        message: "teach him react natie",
      },
      {
        id: 2,
        start: 240, // meants 240 minutes = 04:00 = ((new Date().getHours()) * 60) + new Date().getMinutes(),
        end: 360, // meants 180 minutes = 06:00 = ((new Date().getHours()) * 60) + new Date().getMinutes(),
        username: "Kamal",
        image: require("./user.jpg"),
        message: "play game with him",
      },
      {
        id: 3,
        start: 440, // meants 240 minutes = 04:00 = ((new Date().getHours()) * 60) + new Date().getMinutes(),
        end: 560, // meants 180 minutes = 06:00 = ((new Date().getHours()) * 60) + new Date().getMinutes(),
        username: "Kamal",
        image: require("./user.jpg"),
        message: "play game with him",
      },
      {
        id: 4,
        start: 840, // meants 240 minutes = 04:00 = ((new Date().getHours()) * 60) + new Date().getMinutes(),
        end: 1160, // meants 180 minutes = 06:00 = ((new Date().getHours()) * 60) + new Date().getMinutes(),
        username: "Kamal",
        image: require("./user.jpg"),
        message: "play game with him",
      },
    ],
  },
  {
    id: 3,
    username: "Abdul Qadir",
    image: require("./user.jpg"),
    appointments: [
      {
        id: 1,
        start: 120, // meants 120 minutes = 02:00 = ((new Date().getHours()) * 60) + new Date().getMinutes(),
        end: 180, // meants 180 minutes = 03:00 = ((new Date().getHours()) * 60) + new Date().getMinutes(),
        username: "Karim",
        message: "teach him react natie",
      },
      {
        id: 2,
        start: 240, // meants 240 minutes = 04:00 = ((new Date().getHours()) * 60) + new Date().getMinutes(),
        end: 360, // meants 180 minutes = 06:00 = ((new Date().getHours()) * 60) + new Date().getMinutes(),
        username: "Kamal",
        message: "play game with him",
      },
    ],
  },
];

export default function SchedulerScreen() {
  const date = new Date();
  const top = date.getHours() * 60 + date.getMinutes() + 200;

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 10,
        }}
      >
        <TouchableOpacity
          style={{
            padding: 10,
            borderBottomWidth: 1,
            borderRightWidth: 1,
            borderColor: "#ddd",
          }}
        >
          <Text style={{ fontWeight: "bold" }}>Last Day</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            paddingVertical: 10,
            paddingHorizontal: 30,
            borderBottomWidth: 1,
            borderRightWidth: 1,
            borderColor: "#eee",
          }}
        >
          <Text>Today</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 10,
            borderBottomWidth: 1,
            borderRightWidth: 1,
            borderColor: "#ddd",
          }}
        >
          <Text style={{ fontWeight: "bold" }}>Next Day</Text>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View
            style={{
              top: top,
              height: 5,
              width: "100%",
              position: "absolute",
              backgroundColor: "green",
            }}
          />
          <View style={{ flexDirection: "row" }}>
            <Timeline />
            <FlatList
              data={data}
              keyExtractor={(item) => item.id.toString()}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <Appointment
                  image={item.image}
                  username={item.username}
                  appointments={item.appointments}
                  key={item.id}
                />
              )}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "flex-end",
    marginTop: 10,
  },
});
