import React, {Component} from 'react';
import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    Image,
    ScrollView,
    AsyncStorage
} from 'react-native';
import styles from '../style/StoreS.js'

export default class StoreScreen extends Component 
{
  state = {
    picUrl: '',
    key: ''
  }
  setData = async (currentKey, stringState) => {
    try {
      await AsyncStorage.setItem(currentKey, stringState)
    } catch (err) {
      console.log(err);
    }
  }
  render()
  {

    return (
      <ScrollView style = {styles.masterContainer}>
        <View style = {styles.container}>
          <Text style = {styles.title}> Store </Text>
        </View>

        <View style = {styles.container}>
          <View style = {styles.clothesBox}>
            <Image 
              source = {require('../assets/pogchamp.jpg')}
              style = {styles.clothesPic}
            />
            <Text style = {styles.clothesPrice}> derreau </Text>
            <TouchableOpacity
              onPress = {() => {
                this.setState({
                  picUrl: '../assets/pogchamp.png',
                  key: 'skins'
                });
                const currentKey = this.state.key
                const stringState = JSON.stringify(this.state);
                this.setData(currentKey, stringState);
              }}>
              <Text> Comprar </Text>
            </TouchableOpacity>
          </View>
          <View style = {styles.clothesBox}>
            <Image 
              source = {require('../assets/scullly.png')}
              style = {styles.clothesPic}
            />
            <Text style = {styles.clothesPrice}> derreau </Text>
            <TouchableOpacity>
              <Text> Comprar </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style = {styles.container}>
          <View style = {styles.clothesBox}>
            <Image 
              source = {require('../assets/sucao.jpg')}
              style = {styles.clothesPic}
            />
            <Text style = {styles.clothesPrice}> derreau </Text>
            <TouchableOpacity>
              <Text> Comprar </Text>
            </TouchableOpacity>
          </View>
          <View style = {styles.clothesBox}>
            <Image 
              source = {require('../assets/sergio.jpg')}
              style = {styles.clothesPic}
            />
            <Text style = {styles.clothesPrice}> derreau </Text>
            <TouchableOpacity>
              <Text> Comprar </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}
