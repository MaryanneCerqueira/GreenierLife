import React, {Component} from 'react';
import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity
} from 'react-native';
import styles from '../style/WelcomeS';
import { LinearGradient } from 'expo-linear-gradient';

export default class WelcomeScreen extends Component
{
  render()
  {
    return(
      <View style = {styles.masterContainer}> 
        <LinearGradient
          colors = {['#FFF', '#498A57']}
          style = {styles.background}
        >
          <Text style = {styles.title}> GREENIER LIFE </Text>
          <TouchableOpacity 
            style = {styles.mainButton}
            onPress = {() => {this.props.navigation.navigate('Login')}}
          >
            <Text style = {styles.textButton}> Login </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style = {styles.mainButton}
            onPress = {() => {this.props.navigation.navigate('Register')}}
          >
            <Text style = {styles.textButton}> Register </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    )
  }
}