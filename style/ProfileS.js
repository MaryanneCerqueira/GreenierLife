import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  masterContainer: {
    backgroundColor: '#fff',
    flex: 1
  },
  /*wardrobeContainer: {
    marginTop: 1,
    alignItems: 'center',
    flexDirection: 'column',
  },*/
  wardrobeColumn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  pfpBox: {
    paddingTop: 30,
    height: 150,
    borderBottomWidth: 3,
    alignItems: 'center', 
    marginBottom: 1
  },
  text: {
    color: '#498A57'
  },
  clothesBox: {
    width: 150,
    height: 150,
    backgroundColor: '#FFF',
    borderColor: '#498A57',
    borderWidth: 2,
    marginBottom: 1,
    marginLeft: 1,
    alignItems: 'center'
   },
   clothesPic: {
    width: 100, 
    height: 100
   }
});

export default styles;