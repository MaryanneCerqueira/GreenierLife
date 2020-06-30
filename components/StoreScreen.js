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
  setData = (currentKey, stringState) => {
    AsyncStorage.setItem(currentKey, stringState);
  }
  render()
  {
    return (
      <View style = {{flex: 1, backgroundColor: '#FFF'}}>
        <View style = {styles.header}>
            <Text style = {styles.title}> Loja </Text>
        </View>
        <ScrollView style = {styles.masterContainer}>
          <View style = {styles.container}>
            <View style = {styles.clothesBox}>
              <Image 
                source = {require('../assets/07.png')}
                style = {styles.clothesPic}
              />
              <Text style = {styles.clothesPrice}> 10 greenies </Text>
              <TouchableOpacity
                onPress = {() => {
                  this.setState({
                    picUrl: '../assets/07.png',
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
                  source = {require('../assets/08.png')}
                  style = {styles.clothesPic}
                />
                <Text style = {styles.clothesPrice}> 10 greenies </Text>
                <TouchableOpacity
                  onPress = {() => {
                    this.setState({
                      picUrl: '../assets/08.png',
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
                  source = {require('../assets/10.png')}
                  style = {styles.clothesPic}
                />
                <Text style = {styles.clothesPrice}> 10 greenies </Text>
                <TouchableOpacity
                  onPress = {() => {
                    this.setState({
                      picUrl: '../assets/10.png',
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
                  source = {require('../assets/11.png')}
                  style = {styles.clothesPic}
                />
                <Text style = {styles.clothesPrice}> 10 greenies </Text>
                <TouchableOpacity
                  onPress = {() => {
                    this.setState({
                      picUrl: '../assets/11.png',
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
                  source = {require('../assets/13.png')}
                  style = {styles.clothesPic}
                />
                <Text style = {styles.clothesPrice}> 10 greenies </Text>
                <TouchableOpacity
                  onPress = {() => {
                    this.setState({
                      picUrl: '../assets/13.png',
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
                  source = {require('../assets/14.png')}
                  style = {styles.clothesPic}
                />
                <Text style = {styles.clothesPrice}> 10 greenies </Text>
                <TouchableOpacity
                  onPress = {() => {
                    this.setState({
                      picUrl: '../assets/14.png',
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
                  source = {require('../assets/17.png')}
                  style = {styles.clothesPic}
                />
                <Text style = {styles.clothesPrice}> 10 greenies </Text>
                <TouchableOpacity
                  onPress = {() => {
                    this.setState({
                      picUrl: '../assets/17.png',
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
                  source = {require('../assets/18.png')}
                  style = {styles.clothesPic}
                />
                <Text style = {styles.clothesPrice}> 10 greenies </Text>
                <TouchableOpacity
                  onPress = {() => {
                    this.setState({
                      picUrl: '../assets/18.png',
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
      </View>
    );
  }
}
