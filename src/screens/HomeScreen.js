import React, { useState, useEffect } from "react";
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import * as Haptics from "expo-haptics";
import { goneTaw } from "../data/GoneTaw";

export default function HomeScreen() {
  const [counter, setCounter] = useState(0);
  const cycle = 9;
  const beadsInCycle = 108;

  useEffect(() => {
    counter % 108 === 0
      ? Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error)
      : counter % 10 === 0
      ? Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
      : Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  }, [counter]);

  const beadClickHandler = () => {
    setCounter(counter + 1);
  };

  const resetHandler = () => {
    setCounter(0);
  };

  const description = goneTaw[0].description;

  return (
    <View style={styles.container}>
      <ExpoStatusBar style="auto" />
      <SafeAreaView style={background}>
        <Text style={title}>{goneTaw[0].title} သိဒ္ဓိ (၉ ပတ်)</Text>
        <Text style={{ fontSize: 36, margin: 20 }}>{counter}</Text>
        <Text style={{ fontSize: 18 }}>
          {beadsInCycle} x {parseInt(counter / beadsInCycle)}
        </Text>
        <TouchableOpacity style={beadCounter} onPress={beadClickHandler}>
          <Text style={beadText}>{counter}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{}} onPress={resetHandler}>
          <Text style={reset}>Reset</Text>
        </TouchableOpacity>
        <ScrollView style={description}>
          <Text>{description}</Text>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  background: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
    justifyContent: "center",
  },
  title: { fontSize: 24, margin: 20 },
  beadCounter: {
    backgroundColor: "gray",
    width: 200,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    margin: 50,
  },
  beadText: { color: "white", fontSize: 24, fontWeight: "bold" },
  description: {
    flex: 1,
    width: "100%",
    height: "auto",
    paddingHorizontal: 10,
  },
  reset: { color: "black", fontSize: 24, fontWeight: "bold" },
});
