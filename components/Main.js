import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View 
} from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import Profile from './Profile';
import Store from './Store';

const Tab = createMaterialBottomTabNavigator();
export default class Main extends Component 
{
  render()
  {
    /*
    const { navigation } = this.props;
    const username = navigation.getParam('name');
    */
    return (
      <View style = {styles.container}>
        <NavigationContainer>
          <Tab.Navigator
            activeColor = '#498A57'
            inactiveColor = '#FFF'
            barStyle = {{ backgroundColor: '#CCC' }}
          >
            <Tab.Screen name = "Home" component = {Home} />
            <Tab.Screen name = "Perfil" component = {Profile} />
            <Tab.Screen name = "Loja" component = {Store} />
          </Tab.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})