import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  card_bg: {
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width / 1.05,
    borderRadius: Dimensions.get('window').width / 10,
    alignItems: 'center',
    margin: 7,
  },
  count_container: {
    marginLeft: 5,
  },
  count_text: {
    color: 'black',
    fontSize: Dimensions.get('window').width / 19,
    fontWeight: 'bold',
  },
  count_bg: {
    backgroundColor: 'white',
    width: 35,
    height: 35,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subject_text: {
    color: 'white',
    padding: 12,
    fontSize: Dimensions.get('window').width / 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subject_container: {
    width: Dimensions.get('window').width / 1.5,
  },
  button: {
    backgroundColor: 'white',
    width: 65,
    height: 30,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  button_text: {
    color: 'black',
    fontSize: Dimensions.get('window').width / 20,
    fontWeight: '700',
  },
});
