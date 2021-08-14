import React, { useEffect, useRef, useState } from "react";
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
    username: "Sami",
    image: require("./user.jpg"),
    appointments: [
      {
        id: 1,
        start: 80, // meants 120 minutes = 02:00 = ((new Date().getHours()) * 60) + new Date().getMinutes(),
        end: 200, // meants 180 minutes = 03:00 = ((new Date().getHours()) * 60) + new Date().getMinutes(),
        username: "Karim",
        image: require("./user.jpg"),
        message: "teach him react natie",
        date: new Date(),
      },
      {
        id: 2,
        start: 220, // meants 240 minutes = 04:00 = ((new Date().getHours()) * 60) + new Date().getMinutes(),
        end: 360, // meants 180 minutes = 06:00 = ((new Date().getHours()) * 60) + new Date().getMinutes(),
        username: "Kamal",
        image: require("./user.jpg"),
        message: "play game with him",
        date: new Date(),
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
        start: 100, // meants 120 minutes = 02:00 = ((new Date().getHours()) * 60) + new Date().getMinutes(),
        end: 150, // meants 180 minutes = 03:00 = ((new Date().getHours()) * 60) + new Date().getMinutes(),
        username: "Karim",
        image: require("./user.jpg"),
        message: "teach him react natie",
        date: new Date(),
      },
      {
        id: 2,
        start: 240, // meants 240 minutes = 04:00 = ((new Date().getHours()) * 60) + new Date().getMinutes(),
        end: 460, // meants 180 minutes = 06:00 = ((new Date().getHours()) * 60) + new Date().getMinutes(),
        username: "Kamal",
        image: require("./user.jpg"),
        message: "play game with him",
        date: new Date(),
      },
      {
        id: 3,
        start: 490, // meants 240 minutes = 04:00 = ((new Date().getHours()) * 60) + new Date().getMinutes(),
        end: 560, // meants 180 minutes = 06:00 = ((new Date().getHours()) * 60) + new Date().getMinutes(),
        username: "Kamal",
        image: require("./user.jpg"),
        message: "play game with him",
        date: new Date(),
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
        start: 100, // meants 120 minutes = 02:00 = ((new Date().getHours()) * 60) + new Date().getMinutes(),
        end: 150, // meants 180 minutes = 03:00 = ((new Date().getHours()) * 60) + new Date().getMinutes(),
        username: "Karim",
        image: require("./user.jpg"),
        message: "teach him react natie",
        date: new Date(),
      },
      {
        id: 2,
        start: 240, // meants 240 minutes = 04:00 = ((new Date().getHours()) * 60) + new Date().getMinutes(),
        end: 460, // meants 180 minutes = 06:00 = ((new Date().getHours()) * 60) + new Date().getMinutes(),
        username: "Kamal",
        image: require("./user.jpg"),
        message: "play game with him",
        date: new Date(),
      },
      {
        id: 3,
        start: 490, // meants 240 minutes = 04:00 = ((new Date().getHours()) * 60) + new Date().getMinutes(),
        end: 560, // meants 180 minutes = 06:00 = ((new Date().getHours()) * 60) + new Date().getMinutes(),
        username: "Kamal",
        image: require("./user.jpg"),
        message: "play game with him",
        date: new Date(),
      },
    ],
  },
];

export default function SchedulerScreen() {
  const date = new Date();
  const [top, setTop] = useState(
    date.getHours() * 60 + date.getMinutes() + 100
  );

  const oldHeight = React.useRef(0);
  const [todayInNumber, setTodayInNumber] = useState(date.getDay());
  const [dayOfTheMonth, setDayOfTheMonth] = useState(date.getDate());
  let nextDay = "";
  let lastDay = "";
  let today = "";

  switch (todayInNumber) {
    case 6:
      lastDay = "Fri";
      today = "Sun";
      nextDay = "Sat";
      break;
    case 0:
      lastDay = "Sun";
      today = "Sat";
      nextDay = "Mon";
      break;
    case 1:
      lastDay = "Sat";
      today = "Mon";
      nextDay = "Thur";
      break;
    case 2:
      lastDay = "Mon";
      today = "Thur";
      nextDay = "Wen";
      break;
    case 3:
      lastDay = "Thur";
      today = "Wen";
      nextDay = "Thus";
      break;
    case 4:
      lastDay = "Wen";
      today = "Thus";
      nextDay = "Fri";
      break;
    case 5:
      lastDay = "Thus";
      today = "Fri";
      nextDay = "Sun";
      break;
  }
  useEffect(() => {
    oldHeight.current = 0;
    const timer = setTimeout(() => {
      setTop((prevTime) => prevTime + 1);
    }, 60000);
    return () => {
      clearTimeout(timer);
      oldHeight.current = 0;
    };
  }, [top, todayInNumber, dayOfTheMonth]);

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
          onPress={() => {
            setDayOfTheMonth((prevDay) => prevDay - 1);
            setTodayInNumber((prevDay) => (prevDay < 0 ? 5 : prevDay - 1));
          }}
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
          onPress={() => {
            setDayOfTheMonth(date.getDate());
            setTodayInNumber(date.getDay());
          }}
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
          onPress={() => {
            setDayOfTheMonth((prevDay) => prevDay + 1);
            setTodayInNumber((prevDay) => (prevDay > 5 ? 0 : prevDay + 1));
          }}
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
      <View
        style={{
          marginVertical: 10,
          height: 50,
        }}
      >
        <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 12 }}>
          {today}
        </Text>
        <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 30 }}>
          {dayOfTheMonth}
        </Text>
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
                  oldHeight={oldHeight}
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
