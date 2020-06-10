import React, {Component} from 'react';
import {
    Text,
    StyleSheet,
    View 
} from 'react-native';

export default class Profile extends Component 
{

  render()
  {
    return (
      <View style = {styles.container}>
        <Text style = {styles.text}>
          Oi!!!
        </Text>
        <Text style = {styles.text}> 
          Profile page
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 20,
    color: '#498A57' 
  }
});