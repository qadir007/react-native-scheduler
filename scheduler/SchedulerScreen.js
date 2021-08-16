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

import {
  getDayOfDate,
  getDayOfDateInString,
  getNextDate,
  getPrevDate,
  getSelectedDateData,
} from "./data";

export default function SchedulerScreen() {
  const date = new Date();
  const [data, setData] = useState(getSelectedDateData(date));

  const [top, setTop] = useState(
    date.getHours() * 60 + date.getMinutes() + 100
  );

  const oldHeight = React.useRef(0);
  const [selectedDate, setSelectedDate] = useState(date);
  const [today, setToday] = useState(getDayOfDateInString(date));
  const [dayOfTheMonth, setDayOfTheMonth] = useState(date.getDate());

  useEffect(() => {
    oldHeight.current = 0;
    const timer = setTimeout(() => {
      setTop((prevTime) => prevTime + 1);
    }, 60000);
    return () => {
      clearTimeout(timer);
      oldHeight.current = 0;
    };
  }, [top, dayOfTheMonth, data, selectedDate]);

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
            setSelectedDate(getPrevDate(selectedDate));
            setDayOfTheMonth(getDayOfDate(selectedDate));
            setToday(getDayOfDateInString(selectedDate));
            setData(getSelectedDateData(selectedDate));
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
            setSelectedDate(date);
            setDayOfTheMonth(date.getDate());
            setToday(getDayOfDateInString(date));
            setData(getSelectedDateData(date));
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
            setSelectedDate(getNextDate(selectedDate));
            setDayOfTheMonth(getDayOfDate(selectedDate));
            setToday(getDayOfDateInString(selectedDate));
            setData(getSelectedDateData(selectedDate));
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
              renderItem={({ item }) => {
                oldHeight.current = 0;
                return (
                  <Appointment
                    image={item.image}
                    username={item.username}
                    appointments={item.appointments}
                    key={item.id}
                    oldHeight={oldHeight}
                  />
                );
              }}
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
