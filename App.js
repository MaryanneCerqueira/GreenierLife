import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';

const mainNavigation = createStackNavigator (
    {
        Login: {
            screen: Login,
            navigationOptions: {
                header: null
            }
        },
        Register: {
            screen: Register,
            navigationOptions: {
                headerTitle: 'Register'
            }
        },
        Home: {
            screen: Home,
            navigationOptions: {
                headerTitle: 'Home'
            }
        }
    }
)
export default createAppContainer(mainNavigation);