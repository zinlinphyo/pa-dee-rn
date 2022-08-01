import React, { useState, useEffect } from 'react';
import { Platform, SafeAreaView, StyleSheet, Text, View, StatusBar, TouchableOpacity, ScrollView } from 'react-native';
import moment from 'moment';
import { Calendar } from 'react-native-calendars';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import * as Haptics from 'expo-haptics';

export default function HomeScreen() {

  const [counter, setCounter] = useState(0);

  useEffect(() => { counter % 108 === 0 ? Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error) : Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium) }, [counter]);

  const beadClickHandler = () => { setCounter(counter + 1); };

  const description = "၂။ သမ္မာသမ္ဗုဒ္ဓေါ ဂုဏ်တော် \n တရားအလုံးစုံကို သဗ္ဗညုတဉာဏ်ဖြင့် အလိုလိုသိခြင်း၊ ဉာဏ်ပညာအကြီးဆုံးပုဂ္ဂိုလ်ဖြစ်တော်မူသော မြတ်စွာဘုရား။ \n (က) သမ္မာသမ္ဗုဒ္ဓေါ – သိစရာအားလုံးကို အမှန်အတိုင်း ကိုယ်ပိုင်ဉာဏ်ဖြင့် သိတော်မူသော မြတ်စွာဘုရား။ မဖေါက်မပြန် သယမ္ဘူဉာဏ်ဖြင့် ကိုယ်တော်တိုင်သာ အလုံးစုံသောတရားတို့ကို သိတော်မူပြီးသော မြတ်စွာဘုရား။ \n (ခ) သမ္မာသမ္ဗုဒ္ဓေါ – ကိုယ်တော်တိုင်သာလျှင် ဝါသနာနှင့်တကွ မောဟတည်းဟူသော အိပ်ပျော်ခြင်းမှ နိုးတော်မူပြီးသော မြတ်စွာဘုရား။ \n (ဂ) သမ္မာသမ္ဗုဒ္ဓေါ – အရဟတ္တမဂ်ဉာဏ်နှင့်ပေါင်းဖော်ရခြင်းကြောင့် သဗ္ဗညုတဉာဏ်သို့ရောက်သဖြင့် အသင့်အားဖြင့် ကိုယ်တော်တိုင်သာ ပွင့်တော်မူပြီးသော မြတ်စွာဘုရား။"

  return (
    <View style={styles.container}>
      <ExpoStatusBar style="auto" />
      <SafeAreaView style={{ flex: 1, paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 24, margin: 20 }}>သမ္မာသမ္ဗုဒ္ဓေါ သိဒ္ဓိ (၉ ပတ်)</Text>
        <Text style={{ fontSize: 36, margin: 20 }}>{counter}</Text>
        <Text style={{ fontSize: 18 }}>108 x {(counter / 108).toFixed(0)}</Text>
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
        <ScrollView style={{ flex: 1, width: '100%', height: 'auto', padding: 10 }}>
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
