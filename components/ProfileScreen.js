import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  AsyncStorage
} from 'react-native';
import styles from '../style/ProfileS';
import ImageOverlay from 'react-native-image-overlay';

export default class Profile extends Component {
  state = {
    skinToneUrl: '../assets/00.png',
    hairUrl: '../assets/05.png',
    boughtPicUrl: '',
    backgroundUrl: '../assets/13.png',
    clothesUrl: '../assets/16.png',
  };
  picOpacity(picToBeAvailed) {
    const userDefaultPictures = [
      '00.png',
      '01.png',
      '02.png',
      '03.png',
      '04.png',
      '05.png',
      '06.png',
      '07.png',
      '08.png',
      '09.png',
    ];
    if (userDefaultPictures.includes(picToBeAvailed)) {
      const activeCloth = styles.activeClothesPic;
      return activeCloth;
    } else {
      const inactiveCloth = styles.inactiveClothesPic;
      return inactiveCloth;
    }
  }
  buttonOpacity(picToBeAvailed) {
    const userDefaultPictures = [
      '00.png',
      '01.png',
      '02.png',
      '03.png',
      '04.png',
      '05.png',
      '06.png',
      '07.png',
      '08.png',
      '09.png',
    ];
    if (userDefaultPictures.includes(picToBeAvailed)) {
      const activeButton = styles.activeWearButton;
      return activeButton;
    } else {
      if (picToBeAvailed == this.state.boughtPicUrl){
        const activeButton = styles.activeWearButton;
        return activeButton;
      } else {
        const inactiveButton = styles.inactiveWearButton;
        return inactiveButton;
      }
    }
  }
  buttonScript(i, picToBeAvailed)
  {
    const userDefaultPictures = [
      '00.png',
      '01.png',
      '02.png',
      '03.png',
      '04.png',
      '05.png',
      '06.png',
      '07.png',
      '08.png',
      '09.png',
    ];
    if (userDefaultPictures.includes(picToBeAvailed)) {
      const activeFunction = () => {
        if (i <= 4) {
          this.setState({
            skinToneUrl: '../assets/' + picToBeAvailed,
          });
        } else if (i <= 12) {
          this.setState({
            hairUrl: '../assets/' + picToBeAvailed,
          });
        } else if (i <= 15) {
          this.setState({
            backgroundUrl: '../assets/' + picToBeAvailed,
          });
        } else if (i <= 18) {
          this.setState({
            clothesUrl: '../assets/' + picToBeAvailed,
          });
        }
      }
      return activeFunction;
    } else {
      console.log("nao disponivel");
    }
  }
  getData = async () => {
    try {
      const rawObjectBoughtPic = await AsyncStorage.getItem('skins');
      const objectBoughtPic = JSON.parse(rawObjectBoughtPic);
      const boughtPic = objectBoughtPic.picUrl;
      if (boughtPic !== null) {
        this.setState({
          boughtPicUrl: boughtPic,
        });
      } else console.log('vazio');
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    this.getData();
    const allImagesUrl = [
      {
        title: '00.png',
        file: require('../assets/00.png'),
      },
      {
        title: '01.png',
        file: require('../assets/01.png'),
      },
      {
        title: '02.png',
        file: require('../assets/02.png'),
      },
      {
        title: '03.png',
        file: require('../assets/03.png'),
      },
      {
        title: '04.png',
        file: require('../assets/04.png'),
      },
      {
        title: '05.png',
        file: require('../assets/05.png'),
      },
      {
        title: '06.png',
        file: require('../assets/06.png'),
      },
      {
        title: '07.png',
        file: require('../assets/07.png'),
      },
      {
        title: '08.png',
        file: require('../assets/08.png'),
      },
      {
        title: '09.png',
        file: require('../assets/09.png'),
      },
      {
        title: '10.png',
        file: require('../assets/10.png'),
      },
      {
        title: '11.png',
        file: require('../assets/11.png'),
      },
      {
        title: '12.png',
        file: require('../assets/12.png'),
      },
      {
        title: '13.png',
        file: require('../assets/13.png'),
      },
      {
        title: '14.png',
        file: require('../assets/14.png'),
      },
      {
        title: '15.png',
        file: require('../assets/15.png'),
      },
      {
        title: '16.png',
        file: require('../assets/16.png'),
      },
      {
        title: '17.png',
        file: require('../assets/17.png'),
      },
      {
        title: '18.png',
        file: require('../assets/18.png'),
      },
    ];
    return (
      <View style={styles.masterContainer}>
        <View style={styles.header}>
          <Text style={styles.title}> Perfil </Text>
        </View>
        <TouchableOpacity
          onPress = {() => {
            this.getData()
          }}
        >
          <Text>ai9s0idasio9-as</Text>
        </TouchableOpacity>
        <View style={styles.pfpBox}>
          <ImageOverlay
            source={require(this.state.backgroundUrl)}
            containerStyle={{ width: 75, height: 75 }}
            overlayAlpha={0}>
            <ImageOverlay
              source={require(this.state.skinToneUrl)}
              containerStyle={{ width: 75, height: 75 }}
              overlayAlpha={0}>
              <ImageOverlay
                source={require(this.state.clothesUrl)}
                containerStyle={{ width: 75, height: 75 }}
                overlayAlpha={0}>
                <Image
                  source={require(this.state.hairUrl)}
                  style={{ width: 75, height: 75 }}
                />
              </ImageOverlay>
            </ImageOverlay>
          </ImageOverlay>
          <Text style={styles.username}>@SeuUsuario</Text>
          <Text style={styles.userMoney}>5 greenies</Text>
        </View>
        <ScrollView style={styles.wardrobeColumn}>
          {allImagesUrl.map((section, i) => (
            <View style = {styles.clothesBox}>
              <Image
                source = {section.file}
                style = {this.picOpacity(section.title)}
              />
              <TouchableOpacity
                onPress = {this.buttonScript(i, section.title)}
                style = {this.buttonOpacity(section.title)}
              >
                <Text> Usar </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}
