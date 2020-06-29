import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  masterContainer: {
    backgroundColor: '#fff',
    flex: 1
  },
  wardrobeColumn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  pfpBox: {
    paddingTop: 30,
    height: 150,
    alignItems: 'center', 
    marginBottom: 1
  },
  username: {
    color: '#498A57'
  },
  clothesBox: {
    width: 150,
    height: 'auto',
    backgroundColor: '#FFF',
    borderColor: '#498A57',
    borderWidth: 2,
    marginLeft: 10,
    marginBottom: 10,
    paddingBottom: 5,
    alignItems: 'center'
   },
   clothesPic: {
    width: 100, 
    height: 100
   },
   header: {
    marginTop: 30,
    height: 60,
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 2.5,
    borderBottomColor: '#86C54E',
    paddingBottom: 1,
    marginBottom: 1
   },
   title: {
    textAlign: 'center',
    color: '#4E4E4E',
    fontSize: 25,
    fontWeight: 'bold',
   },
   userMoney: {
     color: '#CCAA00'
   },
   wearButton: {
    backgroundColor: '#B2DF8A',
    marginTop: 5, 
    borderRadius: 50,
    paddingLeft: 30,
    paddingRight: 30
   }
});

export default styles;