import React, {Component} from 'react';
import {
    Text,
    View,
    Image
} from 'react-native';
import styles from '../style/ProfileS';

export default class Profile extends Component 
{

  render()
  {
    return (
      <View style = {styles.container}>
        <View style = {styles.picbox}>
          <Image
            source = {require('../assets/babuzada.png')} 
            style = {{width: 75, height: 75, borderRadius: 75}}
          />
          <Text style = {styles.text}>
            @SeuUsuario
          </Text>
        </View>
        <View style = {styles.wardrobe}>
          <Text style = {styles.text}>
            Oi!!! Aqui vai ser o wardrobe
          </Text>
        </View>
      </View>
    );
  }
}

