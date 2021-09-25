import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs';
import CreatePost from './Screens/CreatePost'
import HomeScreen from './Screens/WelcomeScreen'
import PostScreen from './Screens/PostScreen';
import WelcomeScreen from './Screens/WelcomeScreen'
import { AppTabNavigator } from './components/AppTabNavigator';

export default function App() {
  return (
   <AppContainer/>
  );
}
const switchNavigator=createSwitchNavigator({
  WelcomeScreen:{screen:WelcomeScreen},
  BottomTab:{screen:AppTabNavigator}
})

const AppContainer=createAppContainer(switchNavigator)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});