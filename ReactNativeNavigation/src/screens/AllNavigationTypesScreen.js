import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import DetailsScreen from './DetailsScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function AllNavigationTypesScreen() {
  return (
    <View style={{flex: 1}}>
      <Stack.Navigator>
        <Stack.Screen name="Combined Tabs" component={CombinedTabsNavigator} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </View>
  );
}

function CombinedTabsNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default AllNavigationTypesScreen;
