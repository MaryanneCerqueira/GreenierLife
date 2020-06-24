import React, { Component } from 'react';
import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import WelcomeScreen from './components/WelcomeScreen';
import LoginScreen from './components/LoginScreen';
import MainScreen from './components/MainScreen';
import RegisterScreen from './components/RegisterScreen';

const mainNavigation = createStackNavigator({
  Welcome: {
    screen: WelcomeScreen,
    navigationOptions: {
      header: null,
    },
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null,
    },
  },
  Register: {
    screen: RegisterScreen,
    navigationOptions: {
      header: null,
    },
  },
  Main: {
    screen: MainScreen,
    navigationOptions: {
      header: null
    },
  }
 
});



export default createAppContainer(mainNavigation);
