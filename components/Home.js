import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View 
} from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Profile from './Profile';
import Store from './Store';

export default class Home extends Component 
{
  render()
  {
    const Tab = createMaterialBottomTabNavigator();
    return (
      <View style = {styles.container}>
        <Text style = {styles.text}>
          Oi!!!
        </Text>
        <Text style = {styles.text}> 
          Homepage
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 20,
    color: '#498A57' 
  }
})