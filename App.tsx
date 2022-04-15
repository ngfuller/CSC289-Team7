import * as React from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import PantryComponent from './src/Component/Pantry';

function PantryInventory({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <PantryComponent />
    </View>
  );
}

function Camera({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="PantryInventory">
        <Drawer.Screen name="Pantry" component={PantryInventory} />
        <Drawer.Screen name="Camera" component={Camera} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
