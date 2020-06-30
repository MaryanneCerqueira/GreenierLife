import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  masterContainer: {
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingBottom: 100
  },
  title: {
    fontSize: 40,
    color: 'green',
    fontFamily: 'Roboto'
  },
  input: {
    marginTop: 10,
    marginBottom: 10,
    width: 300,
    backgroundColor: '#FCFCFC',
    fontSize: 16,
    color: '#498A57',
    borderRadius: 30,
    padding: 5,
    paddingLeft: 25,
    borderWidth: 1,
    borderColor: '#498A57'
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
  },
  registerButton: {
    paddingTop: 10
  },
  container2: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
  })

  export default styles