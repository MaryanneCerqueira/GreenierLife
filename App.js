import React, { Component } from 'react';
import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Welcome from './components/Welcome';
import Login from './components/Login';
import Main from './components/Main';
import Register from './components/Register';

const mainNavigation = createStackNavigator({
  Welcome: {
    screen: Welcome,
    navigationOptions: {
      header: null,
    },
  },
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
    },
  },
  Register: {
    screen: Register,
    navigationOptions: {
      header: null,
    },
  },
  Main: {
    screen: Main,
    navigationOptions: {
      header: null
    },
  }
 
});



export default createAppContainer(mainNavigation);
