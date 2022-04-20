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
    fontSize: 25,
    color: '#4078f1',
  },
  quantity: {
    marginLeft: 180,
  },
});

const FoodItem = ({name, quantity}: PantryItem) => {
  return (
    <View style={styles.item}>
      <View>
        <Text style={styles.title}>{name}</Text>
      </View>
      <View>
        <Text style={styles.quantity}>{quantity}</Text>
      </View>
    </View>
  );
};

export default FoodItem;
