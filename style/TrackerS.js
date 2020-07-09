import {StyleSheet, Dimensions } from 'react-native';
const screenWidth = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 2.5,
    borderBottomColor: '#86C54E',
  },
  title: {
    textAlign: 'center',
    color: '#4E4E4E',
    fontSize: 25,
    fontWeight: 'bold',
  },
  botao: {
    backgroundColor: '#498A57',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
   modal: {
    marginTop: 300,
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(211,211,211,0.5)'
   },
   text: {
      color: '#3f2949',
      marginTop: 10,
   },
   input_1: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    width: '100%',
    backgroundColor: '#FCFCFC',
    fontSize: 16,
    color: '#498A57',
    borderRadius: 30,
    padding: 5,
    paddingLeft: 25,
    borderWidth: 1,
    borderColor: '#498A57',
    width: screenWidth-70
  },
  input_2: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    width: '100%',
    backgroundColor: '#FCFCFC',
    fontSize: 16,
    color: '#4A4A4A',
    borderRadius: 30,
    padding: 5,
    paddingLeft: 25,
    borderWidth: 1,
    borderColor: '#4A4A4A',
    width: screenWidth-70
  },
  input_3: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    width: '100%',
    backgroundColor: '#FCFCFC',
    fontSize: 16,
    color: '#67ADDE',
    borderRadius: 30,
    padding: 5,
    paddingLeft: 25,
    borderWidth: 1,
    borderColor: '#67ADDE',
    width: screenWidth-70
  },
  input_4: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    width: '100%',
    backgroundColor: '#FCFCFC',
    fontSize: 16,
    color: '#E8AAAD',
    borderRadius: 30,
    padding: 5,
    paddingLeft: 25,
    borderWidth: 1,
    borderColor: '#E8AAAD',
    width: screenWidth-70
  },
  input_5: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    width: '100%',
    backgroundColor: '#FCFCFC',
    fontSize: 16,
    color: '#7E766B',
    borderRadius: 30,
    padding: 5,
    paddingLeft: 25,
    borderWidth: 1,
    borderColor: '#7E766B',
    width: screenWidth-70
  },
  Button1: {
    backgroundColor: '#B2DF8A',
    marginTop: 5, 
    borderRadius: 50,
    paddingLeft: 30,
    paddingRight: 30
   },
   Button2: {
    backgroundColor: '#4A4A4A',
    marginTop: 5, 
    borderRadius: 50,
    paddingLeft: 30,
    paddingRight: 30
   },
   Button3: {
    backgroundColor: '#67ADDE',
    marginTop: 5, 
    borderRadius: 50,
    paddingLeft: 30,
    paddingRight: 30
   },
   Button4: {
    backgroundColor: '#E8AAAD',
    marginTop: 5, 
    borderRadius: 50,
    paddingLeft: 30,
    paddingRight: 30
   },
   Button5: {
    backgroundColor: '#7E766B',
    marginTop: 5, 
    borderRadius: 50,
    paddingLeft: 30,
    paddingRight: 30
   },
  scrollView: {
    marginHorizontal: 20,
  },
  linearGradient: {
    justifyContent: 'center', //Centered vertically
   alignItems: 'center', // Centered horizontally
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    marginTop:0,
    height: 200
  }
});

export default styles