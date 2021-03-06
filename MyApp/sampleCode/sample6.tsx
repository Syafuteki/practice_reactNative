import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function Main() {
  return (
    <View style={styles.container}>
      <Text>Main</Text>
    </View>
  );
}

function Sub() {
  return (
    <View style={styles.container}>
      <Text>Sub</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Main" component={Main} />
      <Tab.Screen name="Sub" component={Sub} />
    </Tab.Navigator>
  );
}

export default function Sample6() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
