import * as React from 'react';
import {View} from 'react-native';
import {
  createDrawerNavigator,
  DrawerScreenProps,
} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import PantryComponent from './src/Component/Pantry/PantryView';
import ItemEntry from './src/Component/Pantry/ItemEntry';

type RootComponentParameters = {
  Pantry: undefined;
  Camera: undefined;
};

type Props = DrawerScreenProps<RootComponentParameters>;

function PantryInventory(_unused: Props) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <PantryComponent />
    </View>
  );
}

function Camera(_unused: Props) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ItemEntry />
    </View>
  );
}

const Drawer = createDrawerNavigator<RootComponentParameters>();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Pantry">
        <Drawer.Screen name="Pantry" component={PantryInventory} />
        <Drawer.Screen name="Camera" component={Camera} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
