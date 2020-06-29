import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View 
} from 'react-native';

export default class HomepageScreen extends Component 
{
  render()
  {
    return (
      <View style = {styles.container}>
        <Text style = {styles.text}>
          Oi!!!
          So existo pra encher linguica 
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
})