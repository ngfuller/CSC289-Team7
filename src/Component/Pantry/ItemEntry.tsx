import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';
import {FloatingLabelInput} from 'react-native-floating-label-input';

const styles = StyleSheet.create({
  space: {
    height: 10,
  },
});
const ItemEntryComponent: React.FC = () => {
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [exprDate, setExprDate] = useState('');
  const [stock, setStock] = useState('');

  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(!show);
    }, 5000);
    return () => clearTimeout(timeout);
  }, [show]);

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 25,
        padding: 64,
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <FloatingLabelInput
        label="Item Name"
        value={itemName}
        maskType="currency"
        currencyDivider="."
        onChangeText={setItemName}
      />
      <TextInput style={styles.space} />
      <FloatingLabelInput
        label="Quantity"
        value={quantity}
        maskType="currency"
        currencyDivider="."
        keyboardType="numeric"
        onChangeText={setQuantity}
      />
      <TextInput style={styles.space} />
      <FloatingLabelInput
        label="Price"
        value={price}
        maskType="currency"
        mask="99/99/9999"
        keyboardType='numeric'
        onChangeText={setPrice}
      />
      <TextInput style={styles.space} />
      <FloatingLabelInput
        label="Expiration Date"
        value={exprDate}
        maskType="date"
        mask="99/99/9999"
        onChangeText={setExprDate}
      />
      <TextInput style={styles.space} />
      <FloatingLabelInput
        label="Low Stock"
        value={stock}
        maskType="currency"
        currencyDivider="."
        keyboardType="numeric"
        onChangeText={setStock}
      />
      <TextInput style={styles.space} />
      <Button title={'Save'} />
    </View>
  );
};

export default ItemEntryComponent;
