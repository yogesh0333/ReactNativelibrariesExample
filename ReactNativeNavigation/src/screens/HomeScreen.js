import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <View style={styles.btn}>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
      <View style={styles.btn}>
        <Button
          title="Go to CodeScreen"
          onPress={() => navigation.navigate('CodeScreen')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    marginVertical: 20,
  },
});

export default HomeScreen;
