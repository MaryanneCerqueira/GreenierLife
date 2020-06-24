import { StyleSheet } from 'react-native';

const styles = StyleSheet.create ({
  masterContainer: {
    flex: 1,
    backgroundColor: '#fff'
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  clothesBox: {
    width: 150,
    height: 150,
    backgroundColor: '#FFF',
    borderColor: '#498A57',
    borderWidth: 2,
    marginLeft: 1,
    marginBottom: 1,
    alignItems: 'center'
   },
  clothesPrice: {
    fontSize: 20,
    color: '#498A57'
   },
  clothesPic: {
    width: 100, 
    height: 100
   },
  title: {
    color: '#498A57',
    fontSize: 40
  }
});

export default styles;