import React from 'react';
import { Platform, SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import moment from 'moment';
import { Calendar } from 'react-native-calendars';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ExpoStatusBar style="auto" />
      <SafeAreaView style={{ flex: 1, paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, alignItems: 'center' }}>
        <Text>Home Screen</Text>
        <Text>{moment().format('YYYY-MM-DD HH:mm')}</Text>
        <Calendar minDate={'2022-07-12'} horizontal={true} enableSwipeMonths={true} />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
