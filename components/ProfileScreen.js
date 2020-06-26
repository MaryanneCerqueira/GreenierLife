import React, {Component} from 'react';
import {
    Text,
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    AsyncStorage
} from 'react-native';
import styles from '../style/ProfileS';

export default class Profile extends Component 
{
  state = {
    pfp: '../assets/bloodtrail.jpg'
  }
  
  getData = async () => {
    try {
      const rawBoughtPic = await AsyncStorage.getItem('skins');
      const boughtPic = JSON.parse(rawBoughtPic);
      if (boughtPic !== null){
        alert("pedro is alive")
      }
    } catch (err) {
      alert(err);
    }
  }
  render()
  {
    return (
      <View style = {styles.masterContainer}>
        <TouchableOpacity                 
          onPress = {() => {
            this.getData();
          }}>
          <Text>extreme measures</Text>
        </TouchableOpacity>
        <View style = {styles.header}>
          <Text style = {styles.title}> Perfil </Text>
        </View>
        <View style = {styles.pfpBox}>
          <Image
            source = {require(this.state.pfp)} 
            style = {{width: 75, height: 75, borderRadius: 75}}
          />
          <Text style = {styles.username}>
            @SeuUsuario
          </Text>
          <Text style = {styles.userMoney}>
            5 greenies
          </Text>
        </View>

        <ScrollView style = {styles.wardrobeContainer}>
          <View style = {styles.wardrobeColumn}>
            <View style = {styles.clothesBox}>
              <Image
                source = {require('../assets/scullly.png')} 
                style = {styles.clothesPic}
              />
              <TouchableOpacity
                onPress = {() => {
                  this.setState({
                    pfp: '../assets/scullly.png'
                  })
                }}
                style = {styles.wearButton}
              >
                <Text> Usar </Text>
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
                style = {styles.wearButton}
              >
                <Text> Usar </Text>
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
                style = {styles.wearButton}
              >
                <Text> Usar </Text>
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
                style = {styles.wearButton}
              >
                <Text> Usar </Text>
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
                style = {styles.wearButton}
              >
                <Text> Usar </Text>
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
                style = {styles.wearButton}
              >
                <Text> Usar </Text>
              </TouchableOpacity> 
            </View>
          </View>
        </ScrollView>
        
      </View>
    );
  }
}

