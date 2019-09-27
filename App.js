import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SandBox from './src/components/SandBox';

export default function App() {
  return (
    <View style={styles.container}>
      <SandBox></SandBox>
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
