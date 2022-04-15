import React, {Component} from 'react';
import {StatusBar, StyleSheet, Text, View, VirtualizedList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {loadPantryItems, PantryItem} from '../PantryItem';

type PantryComponentState = {
  items: PantryItem[];
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  item: {
    backgroundColor: '#f9c2ff',
    height: 150,
    justifyContent: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,
  },
  title: {
    fontSize: 32,
  },
});

const Item = ({name, quantity}: PantryItem) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>
        {name}
        {quantity}
      </Text>
    </View>
  );
};

const getItem = (data: PantryItem[], index: number) => {
  return data[index];
};

const getItemCount = (data: PantryItem[]) => {
  return data.length;
};

const keyExtractor = (item: PantryItem, index: number) => {
  return `${index + 1}`;
};

class PantryComponent extends Component<{}, PantryComponentState> {
  componentDidMount() {
    loadPantryItems().then(u => {
      this.setState({items: u});
    });
  }

  componentWillUnmount() {
    new AbortController().abort();
    this.setState(null);
  }

  render() {
    if (this.state == null) {
      return <Text>State is null</Text>;
    }

    return (
      <SafeAreaView style={styles.container}>
        <VirtualizedList
          data={this.state.items}
          initialNumToRender={4}
          renderItem={({item}) => (
            <Item name={item.name} quantity={item.quantity} />
          )}
          keyExtractor={keyExtractor}
          getItemCount={getItemCount}
          getItem={getItem}
        />
      </SafeAreaView>
    );
  }
}
export default PantryComponent;
