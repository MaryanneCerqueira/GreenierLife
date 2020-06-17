import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  masterContainer: {
    flex: 1
  },
  wardrobe: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  picbox: {
    paddingTop: 30,
    height: 150,
    borderBottomWidth: 3,
    alignItems: 'center', 
    justifyContent: 'flex-start'
  },
  text: {
    color: '#498A57'
  },
  redbox: {
    width: 100,
    height: 100,
    backgroundColor: '#FFF',
    borderColor: '#498A57',
    borderWidth: 2,
    marginLeft: 1,
    alignItems: 'center'
   },
});

export default styles;