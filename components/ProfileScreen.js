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
import ImageOverlay from "react-native-image-overlay";

export default class Profile extends Component 
{
  
  state = {
    skinToneUrl: '../assets/00.png',
    hairUrl: '../assets/05.png',
    boughtPicUrl: '',
    backgroundUrl: '../assets/15.png',
    clothesUrl: '../assets/16.png'
  };

  picBox(keyPicName)
  {
    const picToBeShown = '../assets/' + keyPicName + '.png';
    return(
      <View style = {styles.clothesBox}>
        <Image
          source = {require(picToBeShown)} 
          style = {styles.clothesPic}
        />
        <TouchableOpacity
          onPress = {() => {
            this.setState({
              skinToneUrl: picToBeShown
            })
          }}
          style = {styles.wearButton}
          >
        <Text> Usar </Text>
        </TouchableOpacity> 
      </View>
    )
  }
  frioCalculista(inactivePicUrl)
  {
    if(inactivePicUrl == this.state.boughtPicUrl) {
      <View style = {styles.clothesBox}>
        <Image
          source = {require('../assets/06.png')} 
          style = {styles.clothesPic}
        />
        <TouchableOpacity
          style = {styles.wearButton}
        >
          <Text> Usar </Text>
        </TouchableOpacity> 
      </View>
    }
    else {
      <View style = {styles.clothesBox}>
        <Image
          source = {require('../assets/06.png')} 
          style = {styles.inactiveClothesPic}
        />
        <TouchableOpacity
          style = {styles.inactiveWearButton}
        >
          <Text> Usar </Text>
        </TouchableOpacity> 
      </View>
    }
  }
  getData = async () =>
  {
    try {
      const rawObjectBoughtPic = await AsyncStorage.getItem('skins');
      const objectBoughtPic = JSON.parse(rawObjectBoughtPic);
      const boughtPic = objectBoughtPic.picUrl;
      if (boughtPic !== null){
        this.setState({
          boughtPicUrl: boughtPic
        });
        alert(this.state.boughtPicUrl)
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
        <View style = {styles.header}>
          <Text style = {styles.title}> Perfil </Text>
        </View>
        <View style = {styles.pfpBox}>
          <TouchableOpacity
            onPress = {() => {
              this.getData()
            }}
          >
            <Text>pedro is back</Text>
          </TouchableOpacity>
          <ImageOverlay
            source = {require(this.state.backgroundUrl)} 
            containerStyle = {{width: 75, height: 75}}
            overlayAlpha = {0}
          >
            <ImageOverlay
              source = {require(this.state.skinToneUrl)}
              containerStyle = {{width: 75, height: 75, borderRadius: 75}}
              overlayAlpha = {0}
            >
              <ImageOverlay
                source = {require(this.state.clothesUrl)}
                containerStyle = {{width: 75, height: 75}}
                overlayAlpha = {0}
              >
                <Image
                  source = {require(this.state.hairUrl)}
                  style = {{width: 75, height: 75}}
                />
              </ImageOverlay>
            </ImageOverlay>
          </ImageOverlay>
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
                  source = {require('../assets/00.png')} 
                  style = {styles.clothesPic}
                />
                <TouchableOpacity
                  onPress = {() => {
                    this.setState({
                      skinToneUrl: '../assets/00.png'
                    })
                  }}
                  style = {styles.wearButton}
                >
                <Text> Usar </Text>
              </TouchableOpacity> 
            </View>
            <View style = {styles.clothesBox}>
              <Image
                source = {require('../assets/01.png')} 
                style = {styles.clothesPic}
              />
              <TouchableOpacity
                onPress = {() => {
                  this.setState({
                    skinToneUrl: '../assets/01.png'
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
                source = {require('../assets/02.png')} 
                style = {styles.clothesPic}
              /> 
              <TouchableOpacity
                onPress = {() => {
                  this.setState({
                    skinToneUrl: '../assets/02.png'
                  })
                }}
                style = {styles.wearButton}
              >
                <Text> Usar </Text>
              </TouchableOpacity>
            </View>
            <View style = {styles.clothesBox}>
              <Image
                source = {require('../assets/03.png')} 
                style = {styles.clothesPic}
              />
              <TouchableOpacity
                onPress = {() => {
                  this.setState({
                    skinToneUrl: '../assets/03.png'
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
                source = {require('../assets/04.png')} 
                style = {styles.clothesPic}
              /> 
              <TouchableOpacity
                onPress = {() => {
                  this.setState({
                    hairUrl: '../assets/04.png'
                  })
                }}
                style = {styles.wearButton}
              >
                <Text> Usar </Text>
              </TouchableOpacity>
            </View>
            <View style = {styles.clothesBox}>
              <Image
                source = {require('../assets/05.png')} 
                style = {styles.clothesPic}
              />
              <TouchableOpacity
                onPress = {() => {
                  this.setState({
                    hairUrl: '../assets/05.png'
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
                source = {require('../assets/06.png')} 
                style = {styles.clothesPic}
              />
              <TouchableOpacity
                onPress = {() => {
                  this.setState({
                    hairUrl: '../assets/06.png'
                  })
                }}
                style = {styles.wearButton}
              >
                <Text> Usar </Text>
              </TouchableOpacity> 
            </View>
            <View style = {styles.clothesBox}>
              <Image
                source = {require('../assets/07.png')} 
                style = {styles.inactiveClothesPic}
              />
              <TouchableOpacity
                style = {styles.inactiveWearButton}
              >
                <Text> Usar </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style = {styles.wardrobeColumn}>
              <View style = {styles.clothesBox}>
                <Image
                  source = {require('../assets/08.png')} 
                  style = {styles.inactiveClothesPic}
                />
                <TouchableOpacity
                  style = {styles.inactiveWearButton}
                >
                <Text> Usar </Text>
              </TouchableOpacity> 
            </View>
            <View style = {styles.clothesBox}>
              <Image
                source = {require('../assets/09.png')} 
                style = {styles.clothesPic}
              />
              <TouchableOpacity
                onPress = {() => {
                  this.setState({
                    hairUrl: '../assets/09.png',
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
                  source = {require('../assets/10.png')} 
                  style = {styles.inactiveClothesPic}
                />
                <TouchableOpacity
                  style = {styles.inactiveWearButton}
                >
                <Text> Usar </Text>
              </TouchableOpacity> 
            </View>
            <View style = {styles.clothesBox}>
              <Image
                source = {require('../assets/11.png')} 
                style = {styles.inactiveClothesPic}
              />
              <TouchableOpacity
                style = {styles.inactiveWearButton}
              >
                <Text> Usar </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style = {styles.wardrobeColumn}>
              <View style = {styles.clothesBox}>
                <Image
                  source = {require('../assets/12.png')} 
                  style = {styles.clothesPic}
                />
                <TouchableOpacity
                  onPress = {() => {
                    this.setState({
                      hairUrl: '../assets/12.png'
                    })
                  }}
                  style = {styles.wearButton}
                >
                <Text> Usar </Text>
              </TouchableOpacity> 
            </View>
            <View style = {styles.clothesBox}>
              <Image
                source = {require('../assets/13.png')} 
                style = {styles.inactiveClothesPic}
              />
              <TouchableOpacity
                style = {styles.inactiveWearButton}
              >
                <Text> Usar </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style = {styles.wardrobeColumn}>
            <View style = {styles.clothesBox}>
              <Image
                source = {require('../assets/14.png')} 
                style = {styles.inactiveClothesPic}
              />
              <TouchableOpacity
                style = {styles.inactiveWearButton}
              >
                <Text> Usar </Text>
              </TouchableOpacity> 
            </View>
            <View style = {styles.clothesBox}>
              <Image
                  source = {require('../assets/15.png')} 
                  style = {styles.clothesPic}
                />
                <TouchableOpacity
                  onPress = {() => {
                    this.setState({
                      backgroundUrl: '../assets/15.png'
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
                  source = {require('../assets/16.png')} 
                  style = {styles.clothesPic}
                />
                <TouchableOpacity
                  onPress = {() => {
                    this.setState({
                      clothesUrl: '../assets/16.png'
                    })
                  }}
                  style = {styles.wearButton}
                >
                <Text> Usar </Text>
              </TouchableOpacity> 
            </View>
            <View style = {styles.clothesBox}>
              <Image
                source = {require('../assets/17.png')} 
                style = {styles.inactiveClothesPic}
              />
              <TouchableOpacity
                style = {styles.inactiveWearButton}
              >
                <Text> Usar </Text>
              </TouchableOpacity> 
            </View>
          </View>
          <View style = {styles.wardrobeColumn}>
              <View style = {styles.clothesBox}>
                <Image
                source = {require('../assets/18.png')} 
                style = {styles.inactiveClothesPic}
              />
              <TouchableOpacity
                style = {styles.inactiveWearButton}
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

