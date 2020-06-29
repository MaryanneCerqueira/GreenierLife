import React, { Component } from 'react';
import { Alert, Text, View, TextInput, TouchableOpacity } from 'react-native';

import styles from '../style/IndexS';

export default class RegisterScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Register</Text>
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput
          style={styles.input}
          onChangeText={(text) => (this.nameState.name = text)}
          placeholder="Username"
        />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Password"
        />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Retype your password"
        />
        <TouchableOpacity style={styles.mainButton}>
          <Text style={styles.textButton}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => {
            this.props.navigation.navigate('Login');
          }}>
          <Text style={{ color: '#aaa' }}>
            {' '}
            Already have an account? Click here{' '}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
