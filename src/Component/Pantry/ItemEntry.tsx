import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {FloatingLabelInput} from 'react-native-floating-label-input';

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

      <FloatingLabelInput
        label="Quantity"
        value={quantity}
        maskType="currency"
        currencyDivider="."
        keyboardType="numeric"
        onChangeText={setQuantity}
      />

      <FloatingLabelInput
        label="Price"
        value={price}
        maskType="date"
        mask="99/99/9999"
        onChangeText={setPrice}
      />

      <FloatingLabelInput
        label="Expiration Date"
        value={exprDate}
        maskType="date"
        mask="99/99/9999"
        onChangeText={setExprDate}
      />

      <FloatingLabelInput
        label="Low Stock"
        value={stock}
        maskType="currency"
        currencyDivider="."
        keyboardType="numeric"
        onChangeText={setStock}
      />
    </View>
  );
};

export default ItemEntryComponent;
