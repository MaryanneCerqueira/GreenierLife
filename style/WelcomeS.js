import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  masterContainer: {
    flex: 1
  },
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 40,
    color: '#fff',
    fontFamily: 'Roboto'
  },
  mainButton: {
    width: 300,
    height: 42,
    backgroundColor: '#498A57',
    marginTop: 10,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25
  },    
  textButton: {
      color: '#FFF',
      fontSize: 25
  }
});

export default styles