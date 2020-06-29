import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    AsyncStorage,
    Modal,
    Button
} from 'react-native';
import styles from '../style/ProfileS';

export default class Profile extends Component 
{
  
  pictures = [
    {
      specificKey: '001',
      picUrl: require('../assets/pogchamp.jpg')
    },
    {
      specificKey: '002',
      picUrl: require('../assets/sucao.jpg')
    },
  ];

  state = {
    pfp: '../assets/bloodtrail.jpg',
    imagePreviewVisible: false,
    boughtPicUrl: ''
  };

  picBox(keyPicName){
    const picToBeShown = '../assets/' + keyPicName + '.jpg';
    return(
      <View style = {styles.clothesBox}>
        <Image
          source = {require(picToBeShown)} 
          style = {styles.clothesPic}
        />
        <TouchableOpacity
          onPress = {() => {
            this.setState({
              pfp: picToBeShown
            })
          }}
          style = {styles.wearButton}
          >
        <Text> Usar </Text>
        </TouchableOpacity> 
      </View>
    )
  }
  getData = async () => {
    try {
      const rawObjectBoughtPic = await AsyncStorage.getItem('skins');
      const objectBoughtPic = JSON.parse(rawObjectBoughtPic);
      const boughtPic = objectBoughtPic.picUrl;
      if (boughtPic !== null){
        this.setState({
          boughtPicUrl: boughtPic
        });
        alert(this.state.boughtPicUrl);
      }else 
        alert("vazio")
    } catch (err) {
      alert(err);
    }
  }
  render()
  {
    return (
      <View style = {styles.masterContainer}>
        <View>
          {this.state.imagePreviewVisible ? (
            <Image
              style = {{width: 75, height: 75}}
              source = {require('../assets/pogchamp.jpg')} 
            />
          ): null}
        </View>
        <View>
          {this.state.imagePreviewVisible ? (
            <Image
              style = {{width: 75, height: 75}}
              source = {require('../assets/sergio.jpg')} 
            />
          ): null}
        </View>
        <View>
          {this.state.imagePreviewVisible ? (
            <Image
              style = {{width: 75, height: 75}}
              source = {require('../assets/sucao.jpg')} 
            />
          ): null}
        </View>
        <View>
          {this.state.imagePreviewVisible ? (
            <Image
              style = {{width: 75, height: 75}}
              source = {require('../assets/twitter.jpg')} 
            />
          ): null}
        </View>

        <View style = {styles.header}>
          <Text style = {styles.title}> Perfil </Text>
        </View>
        <View style = {styles.pfpBox}>
          <TouchableOpacity                 
            onPress = {() => {
            this.getData();
          }}>
          <Text>extreme measures</Text>
          </TouchableOpacity>
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
                source = {require('../assets/capanga.jpg')} 
                style = {styles.clothesPic}
              />
              <TouchableOpacity
                onPress = {() => {
                  this.setState({
                    pfp: '../assets/capanga.jpg'
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
                source = {require('../assets/duraes.jpg')} 
                style = {styles.clothesPic}
              />
              <TouchableOpacity
                onPress = {() => {
                  this.setState({
                    pfp: '../assets/duraes.jpg'
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
                source = {require('../assets/capanga.jpg')} 
                style = {styles.clothesPic}
              /> 
              <TouchableOpacity
                onPress = {() => {
                  this.setState({
                    pfp: '../assets/capanga.jpg'
                  })
                }}
                style = {styles.wearButton}
              >
                <Text> Usar </Text>
              </TouchableOpacity>
            </View>
            <View style = {styles.clothesBox}>
              <Image
                source = {require('../assets/capanga.jpg')} 
                style = {styles.clothesPic}
              />
              <TouchableOpacity
                onPress = {() => {
                  this.setState({
                    pfp: '../assets/capanga.jpg'
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

