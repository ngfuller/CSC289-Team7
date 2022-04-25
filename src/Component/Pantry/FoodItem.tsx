import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {PantryItem} from '../../PantryItem';

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'rgba(183,189,189,0.22)',
    height: 70,
    width: 300,
    justifyContent: 'center',
    marginVertical: 8,
    marginHorizontal: 20,
    padding: 20,
  },
  title: {
    fontSize: 25,
    color: '#4078f1',
  },
  quantity: {
    marginLeft: 220,
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
