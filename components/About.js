import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from './common/Card';

export default function About() {
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={styles.title}>ABOUT</Text>
        <Text style={styles.text}>3Lives is an application where you can upload game reviews.</Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    color: '#333',
    fontWeight: "bold"
  },
  text: {
    fontSize: 20,
    color: '#333',
    paddingVertical: 20,
  }
})