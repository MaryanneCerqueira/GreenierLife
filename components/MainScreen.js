import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View 
} from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomepageScreen from './HomepageScreen';
import ProfileScreen from './ProfileScreen';
import StoreScreen from './StoreScreen';

const Tab = createMaterialBottomTabNavigator();
export default class MainScreen extends Component 
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
            inactiveColor = '#000'
            barStyle = {{ backgroundColor: '#FFF' }}
          >
            <Tab.Screen name = "Home" component = {HomepageScreen} />
            <Tab.Screen name = "Perfil" component = {ProfileScreen} />
            <Tab.Screen name = "Loja" component = {StoreScreen} />
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