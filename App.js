import { StatusBar } from "expo-status-bar";
import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import SchedulerScreen from "./scheduler/SchedulerScreen";
export default function App() {
  return (
    <>
      <StatusBar hidden />
      <SchedulerScreen />
    </>
  );
}
