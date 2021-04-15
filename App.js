import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  console.log('App executed');
  const handled = () => console.log('Text pressed');

  return (
    <View style={styles.container}>
      <Text numberOfLines={1} onPress={handled}>Hello World Mohsin Heloo Again my name is Mohsin This is line number two can you change the code ?</Text>
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
