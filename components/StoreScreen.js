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
  clearAsyncStorage = async() => {
    alert("limpo");
    await AsyncStorage.clear();
  }
  setData = async (currentKey, stringState) => {
    try {
      await AsyncStorage.setItem(currentKey, stringState);
      alert("funcionei");
    } catch (err) {
      alert(err);
    }
  }
  render()
  {
    //this.clearAsyncStorage();
    return (
      <ScrollView style = {styles.masterContainer}>
        <View style = {styles.header}>
          <Text style = {styles.title}> Loja </Text>
        </View>

        <View style = {styles.container}>
          <View style = {styles.clothesBox}>
            <Image 
              source = {require('../assets/pogchamp.jpg')}
              style = {styles.clothesPic}
            />
            <Text style = {styles.clothesPrice}> 10 greenies </Text>
            <TouchableOpacity
              onPress = {() => {
                this.setState({
                  picUrl: '../assets/pogchamp.jpg',
                  key: 'skins'
                });
                const currentKey = this.state.key;
                const stringState = JSON.stringify(this.state);
                this.setData(currentKey, stringState);
              }}
              style = {styles.buyButton}>
              <Text style = {{color: '#4E4E4E'}}> Comprar </Text>
            </TouchableOpacity>
            </View>
            <View style = {styles.clothesBox}>
              <Image 
                source = {require('../assets/scullly.png')}
                style = {styles.clothesPic}
              />
              <Text style = {styles.clothesPrice}> 10 greenies </Text>
              <TouchableOpacity
                onPress = {() => {
                  this.setState({
                    picUrl: '../assets/scullly.png',
                    key: 'skins'
                  });
                  const currentKey = this.state.key;
                  const stringState = JSON.stringify(this.state);
                  this.setData(currentKey, stringState);
                }}
                style = {styles.buyButton}
              >
                <Text style = {{color: '#4E4E4E'}}> Comprar </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style = {styles.container}>
            <View style = {styles.clothesBox}>
              <Image 
                source = {require('../assets/sucao.jpg')}
                style = {styles.clothesPic}
              />
              <Text style = {styles.clothesPrice}> 10 greenies </Text>
              <TouchableOpacity
                onPress = {() => {
                  this.setState({
                    picUrl: '../assets/sucao.jpg',
                    key: 'skins'
                  });
                  const currentKey = this.state.key;
                  const stringState = JSON.stringify(this.state);
                  this.setData(currentKey, stringState);
                }}
                style = {styles.buyButton}
              >
                <Text style = {{color: '#4E4E4E'}}> Comprar </Text>
              </TouchableOpacity>
            </View>
            <View style = {styles.clothesBox}>
              <Image 
                source = {require('../assets/sergio.jpg')}
                style = {styles.clothesPic}
              />
              <Text style = {styles.clothesPrice}> 10 greenies </Text>
              <TouchableOpacity
                onPress = {() => {
                  this.setState({
                    picUrl: '../assets/sergio.jpg',
                    key: 'skins'
                  });
                  const currentKey = this.state.key;
                  const stringState = JSON.stringify(this.state);
                  this.setData(currentKey, stringState);
                }}
                style = {styles.buyButton}
              >
                <Text style = {{color: '#4E4E4E'}}> Comprar </Text>
              </TouchableOpacity>
            </View>
          </View>
      </ScrollView>
    );
  }
}
