import React, {Component} from 'react';
import {StatusBar, StyleSheet, Text, View, VirtualizedList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {loadPantryItems, PantryItem} from '../../PantryItem';
import FoodItem from './FoodItem';

type PantryComponentState = {
  items: PantryItem[];
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    padding: 30,
    width: 400,
  },
  item: {
    backgroundColor: '#a22dad',
    height: 150,
    justifyContent: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,
  },
  pantryView: {
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 32,
  },
});

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
        <View style={styles.pantryView}>
          <VirtualizedList
            data={this.state.items}
            initialNumToRender={4}
            renderItem={({item}) => (
              <FoodItem name={item.name} quantity={item.quantity} />
            )}
            keyExtractor={keyExtractor}
            getItemCount={getItemCount}
            getItem={getItem}
          />
        </View>
      </SafeAreaView>
    );
  }
}
export default PantryComponent;
