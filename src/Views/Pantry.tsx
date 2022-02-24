import React from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';

const Pantry = () => (
  <ScrollView contentContainerStyle={styles.view}>
    <Text>Pantry Example Text</Text>
    <View>Simple View</View>
  </ScrollView>
);

const styles = StyleSheet.create({
  view: {
    marginTop: 20,
    padding: 20,
  },
  h1: {
    fontSize: 22,
    alignSelf: 'center',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
  },
});

export default Pantry;
