import 'react-native-gesture-handler';
import React from 'react';
import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ReactNativeNavigation from './ReactNativeNavigation';
import ReactNativeBiometrics from './ReactNativeBiometrics';

const Screens = [
  {name: 'ReactNativeNavigation'},
  {name: 'ReactNativeBiometrics'},
];

const LandingPage = () => {
  const navigation = useNavigation();
  const renderItem = ({item}) => {
    return (
      <View style={{marginVertical: 10}}>
        <Button
          title={item.name}
          onPress={() => navigation.navigate(`${item.name}`)}
        />
      </View>
    );
  };
  return <FlatList data={Screens} renderItem={renderItem} />;
};

function MainAppNavigator() {
  const Stack = createStackNavigator();

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="LandingPage"
            component={LandingPage}
            // options={{
            //   headerShown: false,
            // }}
          />
          <Stack.Screen
            name="ReactNativeBiometrics"
            component={ReactNativeBiometrics}
          />
          <Stack.Screen
            name="ReactNativeNavigation"
            component={ReactNativeNavigation}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
export default MainAppNavigator;

const styles = StyleSheet.create({});
