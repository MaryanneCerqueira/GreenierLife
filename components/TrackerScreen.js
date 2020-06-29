import React, { Component } from 'react';
//import react in our code. 

import { AsyncStorage, Modal, View,Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, InteractionManager, Dimensions} from 'react-native';
//import all the components we are going to use. 
import { Card, ListItem,Button} from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../style/TrackerS';

export default class App extends Component {
  Modal_Dealing(name_modal){
    switch(name_modal){
      case 'Tempo de Caminhada':
        this.setState({ isVisible: true});
        break;
      case 'Tempo de Carro':
        this.setState({ isVisible2: true});
        break;
      case 'Tempo de Ônibus':
        this.setState({ isVisible3: true});
        break;
      case 'Tempo de Bicicleta':
        this.setState({ isVisible4: true});
        break;
      case 'Tempo de Banho':
        this.setState({ isVisible5: true});
        break;
    }
  }
  state = {
    isVisible2: false,
    isVisible: false,
    isVisible3: false,
    isVisible4: false,
    isVisible5:false,
    walk: '',
    car:'',
    bus: '',
    bike: '',
    shower: ''//state of modal default false
  }
  componentDidMount = () => AsyncStorage.getItem('walk').then((value) => this.setState({ 'walk': value }))
  componentDidMount = () => AsyncStorage.getItem('car').then((value) => this.setState({ 'car': value }))
  componentDidMount = () => AsyncStorage.getItem('bus').then((value) => this.setState({ 'bus': value }))
  componentDidMount = () => AsyncStorage.getItem('bike').then((value) => this.setState({ 'bike': value }))
  componentDidMount = () => AsyncStorage.getItem('shower').then((value) => this.setState({ 'shower': value }))
  setWalk = (value) => {
    AsyncStorage.setItem('walk', value);
    this.setState({ 'walk': value });
    console.log("Walk rolando");
 }
 setCar = (value) => {
  AsyncStorage.setItem('car', value);
  this.setState({ 'car': value });
  console.log("Car rolando");
}
setBus = (value) => {
  AsyncStorage.setItem('bus', value);
  this.setState({ 'bus': value });
  console.log("Bus rolando");
}
setBike = (value) => {
  AsyncStorage.setItem('bike', value);
  this.setState({ 'bike': value });
  console.log("Bike rolando");
}
setShower = (value) => {
  AsyncStorage.setItem('shower', value);
  this.setState({ 'shower': value });
  console.log("Shower rolando");
}
  render() {
    const list = [
      {
        title: 'Tempo de Caminhada',
        icon: 'directions-walk',
        type: 'material',
        color: '#A5DE6D'
      },
      {
        title: 'Tempo de Carro',
        icon: 'drive-eta',
        type: 'material',
        color: '#4A4A4A'
      },
      {
        title: 'Tempo de Ônibus',
        icon: 'airport-shuttle',
        type: 'material',
        color: '#67ADDE'
      },
      {
        title: 'Tempo de Bicicleta',
        icon: 'directions-bike',
        type: 'material',
        color: '#E8AAAD'
      },
      {
        title: 'Tempo de Banho',
        icon: 'shower-head',
        type: 'material-community', 
        color: '#7E766B'
      }
    ]
    return (
      <View >
      <View style={styles.header}>
        <Text style={styles.title}>Registrador</Text>
      </View>
      <Modal animationType = {"slide"} transparent = {true}
            visible = {this.state.isVisible}
            onRequestClose = {() =>{ console.log("Modal has been closed.") } }>
      <View style = {styles.modal}>
      <TextInput 
            style = {styles.input_1}
            placeholder = "Digite aqui o tempo em minutos!"
            onChangeText = {this.setWalk}
          />
        <TouchableOpacity
                onPress = {() => {
                  this.setState({ isVisible:!this.state.isVisible})
                }}
                style = {styles.Button1}
              >
                <Text style={{color: 'white'}}> Confirmar </Text>
              </TouchableOpacity> 
      </View>
    </Modal>
    <Modal animationType = {"slide"} transparent = {true}
            visible = {this.state.isVisible2}
            onRequestClose = {() =>{ console.log("Modal has been closed.") } }>
      <View style = {styles.modal}>
      <TextInput 
            style = {styles.input_2}
            placeholder = "Digite aqui o tempo em minutos!"
            onChangeText = {this.setCar}
          />
        <TouchableOpacity
                onPress = {() => {
                  this.setState({ isVisible2:!this.state.isVisible2})
                }}
                style = {styles.Button2}
              >
                <Text style={{color: 'white'}}> Confirmar </Text>
              </TouchableOpacity> 
      </View>
    </Modal>
    <Modal animationType = {"slide"} transparent = {true}
            visible = {this.state.isVisible3}
            onRequestClose = {() =>{ console.log("Modal has been closed.") } }>
      <View style = {styles.modal}>
      <TextInput 
            style = {styles.input_3}
            placeholder = "Digite aqui o tempo em minutos!"
            onChangeText = {this.setBus}
          />
        <TouchableOpacity
                onPress = {() => {
                  this.setState({ isVisible3:!this.state.isVisible3})
                }}
                style = {styles.Button3}
              >
                <Text style={{color: 'white'}}> Confirmar </Text>
              </TouchableOpacity> 
      </View>
    </Modal>
    <Modal animationType = {"slide"} transparent = {true}
            visible = {this.state.isVisible4}
            onRequestClose = {() =>{ console.log("Modal has been closed.") } }>
      <View style = {styles.modal}>
      <TextInput 
            style = {styles.input_4}
            placeholder = "Digite aqui o tempo em minutos!"
            onChangeText = {this.setBike}
          />
        <TouchableOpacity
                onPress = {() => {
                  this.setState({ isVisible4:!this.state.isVisible4})
                }}
                style = {styles.Button4}
              >
                <Text style={{color: 'white'}}> Confirmar </Text>
              </TouchableOpacity> 
      </View>
    </Modal>
    <Modal animationType = {"slide"} transparent = {true}
            visible = {this.state.isVisible5}
            onRequestClose = {() =>{ console.log("Modal has been closed.") } }>
      <View style = {styles.modal}>
      <TextInput 
            style = {styles.input_5}
            placeholder = "Digite aqui o tempo em minutos!"
            onChangeText = {this.setShower}
          />
        <TouchableOpacity
                onPress = {() => {
                  this.setState({ isVisible5:!this.state.isVisible5})
                }}
                style = {styles.Button5}
              >
                <Text style={{color: 'white'}}> Confirmar </Text>
              </TouchableOpacity> 
      </View>
    </Modal>
    <LinearGradient 
          colors={['#C1EB7B', '#C1EB7B', '#A5DE6D']}
          style={styles.linearGradient}>
          <Text style={{fontSize: 30, color:'white', textAlign: "center"}}>
            Conte-nos quanto tempo você gastou nessas atividades hoje!
          </Text>
    </LinearGradient>
        <Text style={{fontSize: 25, color: 'black', textAlign: 'center', marginTop: 10}}>
          Registrador de Hoje
        </Text>
        <ScrollView style={styles.scrollView}>
        {
        list.map((item, i) => (
          <ListItem
            key={i}
            title={item.title}
            titleStyle={{fontSize: 24, color: '#D3D3D3'}}
            leftIcon={{ name: item.icon, color: item.color, size: 40, type: item.type }}
            rightIcon={{name: 'arrow-drop-down', color: item.color}}
            onPress = {() => this.Modal_Dealing(item.title)}
            
      />
    ))
        }
        </ScrollView>
      </View>
    );
  }
}
