import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import StackNavigator from './StackNavigator';
import BottomTabsNavigator from './BottomTabsNavigator';
import AllNavigationTypesScreen from '../screens/AllNavigationTypesScreen';

const Drawer = createDrawerNavigator();

function AppNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Stack Navigator" component={StackNavigator} />
      <Drawer.Screen
        name="Bottom Tabs Navigator"
        component={BottomTabsNavigator}
      />
      <Drawer.Screen
        name="All Navigation Types"
        component={AllNavigationTypesScreen}
      />
    </Drawer.Navigator>
  );
}

export default AppNavigator;
