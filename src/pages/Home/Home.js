import React, {useEffect} from 'react';
import {View, TouchableOpacity, Text, StatusBar} from 'react-native';
import styles from './Home.styles';
import LinearGradient from 'react-native-linear-gradient';

import ChangeStatusBar from '../../components/styles/GeneralStatusBarColor';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor={'#0a0c80'} />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('LessonsPage');
        }}>
        <LinearGradient
          colors={['#0E5DF8', '#10249F']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.button_gradient}>
          <View style={styles.button_border}>
            <Text style={styles.button_text}>Giriş</Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
