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
  header: {
    marginTop: 30,
    height: 60,
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 2.5,
    borderBottomColor: '#86C54E',
    paddingBottom: 10,
    marginBottom: 10
  },
  clothesBox: {
    width: 150,
    height: 150,
    backgroundColor: '#FFF',
    borderColor: '#498A57',
    borderWidth: 2,
    marginLeft: 10,
    marginBottom: 10,
    alignItems: 'center'
   },
  clothesPrice: {
    fontSize: 12,
    color: '#CCAA00'
   },
  clothesPic: {
    width: 100, 
    height: 100
   },
  title: {
    textAlign: 'center',
    color: '#4E4E4E',
    fontSize: 25,
    fontWeight: 'bold',
  },
  buyButton: { 
    backgroundColor: '#B2DF8A', 
    borderRadius: 50,
    paddingLeft: 30,
    paddingRight: 30,
    marginBottom: 2
  }
});

export default styles;