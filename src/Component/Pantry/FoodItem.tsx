import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
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
});

const FoodItem = ({name, quantity}: PantryItem) => {
  return (
    <View style={styles.item}>
      <View>
        <Text>{name}</Text>
      </View>
      <View>
        <Text>{quantity}</Text>
      </View>
    </View>
  );
};

export default FoodItem;
