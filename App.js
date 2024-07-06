import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [myName] = useState('Nuaku Kwabena Muheeb');
  return (
    <View style={styles.container}>
      <Text style={styles.sizeText}>My name is <Text style={styles.boldText}>{myName}</Text></Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#40E0D0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sizeText: {
    fontSize: 24
  },
  boldText: {
    fontWeight: 'bold'
  }
});
