
import React from 'react';
import { StyleSheet, View, Button, Alert } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <Button
        color="orange"
        title="Click Here"
        onPress={() => Alert.alert("Your form", "Successfully Submit", [
          { text: 'Yes', onPress: () => console.log("Yes") },
          { text: 'No', onPress: () => console.log("No") }
        ])} />
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
