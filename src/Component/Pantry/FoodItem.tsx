import React, {Component} from 'react';
import {StatusBar, StyleSheet, Text, View, VirtualizedList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {PantryItem} from '../../PantryItem';

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#b7bdbd',
    height: 70,
    width: 250,
    justifyContent: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,
  },
  title: {
    fontSize: 45,
    color: '#66e315',
  },
});

const FoodItem = ({name, quantity}: PantryItem) => {
  return (
    <View style={styles.item}>
      <View style={styles.title}>
        <Text>{name}</Text>
      </View>
      <View>
        <Text>{quantity}</Text>
      </View>
    </View>
  );
};

export default FoodItem;
