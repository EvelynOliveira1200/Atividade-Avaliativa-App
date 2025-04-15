import React from 'react';
import Isabella from '../../assets/Isabella.jpg'
import { View, Text, StyleSheet, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={Isabella} />
      <Text style={styles.text}>Isabella Borin</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    height: 300,
    width: 300,
  },
  text:{
    color: '#000',
    fontFamily: 'Montserrat',
  }
});