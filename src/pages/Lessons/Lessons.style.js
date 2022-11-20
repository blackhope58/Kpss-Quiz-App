import {StyleSheet, StatusBar} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  button_text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 37,
    padding: 7,
    fontWeight: 'bold',
    fontFamily: 'lucida grande',
  },
  button_border: {
    borderWidth: 2.2,
    borderColor: 'white',
    borderRadius: 40,
    margin: 6,
  },
  button_gradient: {
    borderRadius: 50,
    elevation: 15,
    shadowColor: 'blue',
    marginLeft: 35,
    marginRight: 35,
    marginTop: 10,
    marginBottom: 10,
  },
  scrollview: {
    paddingTop: StatusBar.currentHeight,
  },
});
