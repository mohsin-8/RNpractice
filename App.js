import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  console.log('App executed');
  const handled = () => console.log('Text pressed');
  // console.log(require("./assets/icon.png"))
  return (
    <View style={styles.container}>
      <Text numberOfLines={1} onPress={handled}>Hello React Native</Text>
      <Image fadeDuration={1000} source={{
        uri: "https://picsum.photos/200/300",
        width: 200,
        height: 300,
      }} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
