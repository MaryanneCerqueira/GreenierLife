import React, {Component} from 'react';
import {
  Alert,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

import styles from '../style/IndexS';

export default class Login extends Component 
{
  loginButtonClickEvent = () =>
  {
    Alert.alert("Greenier Life", "Você clicou no botão de login")
  }

  state = {
    name: ''
  }

  render()
  {
    return (
        <View style = {styles.container}>
          <Text style = {styles.title}>
            GREENIER LIFE
          </Text>

          <TextInput 
            style = {styles.input}
            onChangeText = {text => this.state.name = text}
            placeholder = "Username"
          />
          <TextInput 
            style = {styles.input}
            secureTextEntry = {true}
            placeholder = "Password"
          />
          <TouchableOpacity
            style = {styles.loginButton}
            onPress = {() => {this.props.navigation.navigate('Home', {'name': this.state.name})}}
          >
            <Text style = {styles.loginTextButton}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style = {styles.registerButton}
            onPress = {() => {this.props.navigation.navigate('Register')}}
          >
            <Text style = {{color: '#aaa'}}> Don't have an account? Click here </Text>
          </TouchableOpacity>
        </View>
    );
  }
}