import React, { useState, useEffect } from 'react';
import { Platform, SafeAreaView, StyleSheet, Text, View, StatusBar, TouchableOpacity, ScrollView } from 'react-native';
import moment from 'moment';
import { Calendar } from 'react-native-calendars';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import * as Haptics from 'expo-haptics';

export default function HomeScreen() {

  const [counter, setCounter] = useState(0);

  useEffect(() => { counter % 108 === 0 ? Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error) : counter % 10 === 0 ? Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success) : Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light) }, [counter]);

  const beadClickHandler = () => { setCounter(counter + 1); };

  const description = "ဝိဇ္ဇာဉာဏ် ၃-ပါး(၈ပါး)၊ စရဏ အကျင့် ၁၅ ပါးတို့နှင့် ပြည့်စုံတော်မူခြင်း၊ အကြီးဆုံး ဝိဇ္ဇာနှင့် အကောင်းဆုံး အကျင့်ရှိသူဖြစ်တော်မူသော မြတ်စွာဘုရား။"

  return (
    <View style={styles.container}>
      <ExpoStatusBar style="auto" />
      <SafeAreaView style={{ flex: 1, paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 24, margin: 20 }}>ဝိဇ္ဇာစရဏ သမ္ပန္နော သိဒ္ဓိ (၉ ပတ်)</Text>
        <Text style={{ fontSize: 36, margin: 20 }}>{counter}</Text>
        <Text style={{ fontSize: 18 }}>108 x {parseInt(counter / 108)}</Text>
        <TouchableOpacity style={{ backgroundColor: 'gray', width: 200, height: 200, justifyContent: 'center', alignItems: 'center', borderRadius: 100, margin: 50 }} onPress={beadClickHandler}>
          <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>
            {counter}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{}} onPress={() => setCounter(0)}>
          <Text style={{ color: 'black', fontSize: 24, fontWeight: 'bold' }}>
            Reset
          </Text>
        </TouchableOpacity>
        <ScrollView style={{ flex: 1, width: '100%', height: 'auto', paddingTop: 10, paddingHorizontal: 10 }}>
          <Text>{description}</Text>
        </ScrollView>
      </SafeAreaView>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
