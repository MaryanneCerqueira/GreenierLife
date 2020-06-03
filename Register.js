import React, {Component} from 'react';
import {
  Alert,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

import styles from '../style/IndexS';

export default class Register extends Component 
{


  render()
  {
    return (
        <View style = {styles.container}>
          <Text style = {styles.title}>
            GREENIER LIFE
          </Text>          
          <TextInput 
            style = {styles.input}
            placeholder = "Email"
          />
          <TextInput 
            style = {styles.input}
            onChangeText = {text => this.nameState.name = text}
            placeholder = "Username"
          />
          <TextInput 
            style = {styles.input}
            secureTextEntry = {true}
            placeholder = "Password"
          />
          <TextInput 
            style = {styles.input}
            secureTextEntry = {true}
            placeholder = "Retype your password"
          />
          <TouchableOpacity
            style = {styles.loginButton}
          >
            <Text style = {styles.loginTextButton}>Register</Text>
          </TouchableOpacity>
        </View>
    );
  }
}