import React, {Component} from 'react';
import {
    Text,
    StyleSheet,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import styles from '../style/ProfileS';

export default class Profile extends Component 
{
  state = {
    pic: '../assets/aaaaaa.jpg'
  }
  render()
  {
    return (
      <View style = {styles.masterContainer}>
        <View style = {styles.picbox}>
          <Image
            source = {require(this.state.pic)} 
            style = {{width: 75, height: 75, borderRadius: 75}}
          />
          <Text style = {styles.text}>
            @SeuUsuario
          </Text>
        </View>
        <View style = {styles.wardrobe}>
          <View style = {styles.redbox}>
            <Image
              source = {require('../assets/babuzada.png')} 
              style = {{width: 75, height: 75, borderRadius: 75}}
            />
            <TouchableOpacity
              onPress = {() => {
                this.setState({
                  pic: '../assets/babuzada.png'
                })
              }}
            >
              <Text>Usar esse</Text>
            </TouchableOpacity> 
          </View>
          <View style = {styles.redbox}>
            <Image
              source = {require('../assets/aaaaaa.jpg')} 
              style = {{width: 75, height: 75, borderRadius: 75}}
            />
            <TouchableOpacity
              onPress = {() => {
                this.setState({
                  pic: '../assets/aaaaaa.jpg'
                })
              }}
            >
              <Text>Usar esse</Text>
            </TouchableOpacity>
          </View>
          <View style = {styles.redbox}>
            <Image
              source = {require('../assets/bloodtrail.jpg')} 
              style = {{width: 75, height: 75, borderRadius: 75}}
            /> 
            <TouchableOpacity
              onPress = {() => {
                this.setState({
                  pic: '../assets/bloodtrail.jpg'
                })
              }}
            >
              <Text>Usar esse</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

