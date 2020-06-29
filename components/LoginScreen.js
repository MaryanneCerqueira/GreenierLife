import React, {Component} from 'react';
import {
  Alert,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

import styles from '../style/IndexS';

export default class LoginScreen extends Component 
{

  state = {
    name: ''
  }

  render()
  {
    return (
      <View style = {styles.masterContainer}>
        <View style = {styles.container}>
          <Text style = {styles.title}>Login</Text>
          <TextInput 
            style = {styles.input}
            onChangeText = {text => this.setState({
              name: text
            })}
            placeholder = "Username or Email"
          />
          <TextInput 
            style = {styles.input}
            secureTextEntry = {true}
            placeholder = "Password"
          />
          <TouchableOpacity
            style = {styles.mainButton}
            onPress = {() => {this.props.navigation.navigate('Main', {'name': this.state.name})}}
          >
            <Text style = {styles.textButton}>Sign In</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style = {styles.registerButton}
            onPress = {() => {this.props.navigation.navigate('Register')}}
          >
            <Text style = {{color: '#aaa'}}> Don't have an account? Click here </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style = {styles.registerButton}
            onPress = {() => {alert("lembra da proxima vez blz")}}
          >
            <Text style = {{color: '#aaa'}}> Forgot your password? </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}