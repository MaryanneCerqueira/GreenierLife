import React, {Component} from 'react';
import {
    Text,
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import styles from '../style/ProfileS';

export default class Profile extends Component 
{
  state = {
    pfp: '../assets/aaaaaa.jpg'
  }
  render()
  {
    return (
      <View style = {styles.masterContainer}>

        <View style = {styles.pfpBox}>
          <Image
            source = {require(this.state.pfp)} 
            style = {{width: 75, height: 75, borderRadius: 75}}
          />
          <Text style = {styles.text}>
            @SeuUsuario
          </Text>
        </View>

        <ScrollView style = {styles.wardrobeContainer}>
          <View style = {styles.wardrobeColumn}>
            <View style = {styles.clothesBox}>
              <Image
                source = {require('../assets/babuzada.png')} 
                style = {styles.clothesPic}
              />
              <TouchableOpacity
                onPress = {() => {
                  this.setState({
                    pfp: '../assets/babuzada.png'
                  })
                }}
              >
                <Text>Usar esse</Text>
              </TouchableOpacity> 
            </View>
            <View style = {styles.clothesBox}>
              <Image
                source = {require('../assets/aaaaaa.jpg')} 
                style = {styles.clothesPic}
              />
              <TouchableOpacity
                onPress = {() => {
                  this.setState({
                    pfp: '../assets/aaaaaa.jpg'
                  })
                }}
              >
                <Text>Usar esse</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style = {styles.wardrobeColumn}>
            <View style = {styles.clothesBox}>
              <Image
                source = {require('../assets/bloodtrail.jpg')} 
                style = {styles.clothesPic}
              /> 
              <TouchableOpacity
                onPress = {() => {
                  this.setState({
                    pfp: '../assets/bloodtrail.jpg'
                  })
                }}
              >
                <Text>Usar esse</Text>
              </TouchableOpacity>
            </View>
            <View style = {styles.clothesBox}>
              <Image
                source = {require('../assets/babuzada.png')} 
                style = {styles.clothesPic}
              />
              <TouchableOpacity
                onPress = {() => {
                  this.setState({
                    pfp: '../assets/babuzada.png'
                  })
                }}
              >
                <Text>Usar esse</Text>
              </TouchableOpacity> 
            </View>
          </View>
        </ScrollView>
        
      </View>
    );
  }
}

