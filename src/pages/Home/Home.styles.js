import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  button_text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 40,
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
    margin: 35,
  },
});
