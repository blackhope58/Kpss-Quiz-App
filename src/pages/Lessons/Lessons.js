import React, {useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  StatusBar,
} from 'react-native';
import styles from './Lessons.style';
import LinearGradient from 'react-native-linear-gradient';

import turkce_data from '../../../assets/turkce_data.json';

const Lessons = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor={'#e35300'} />
      <ScrollView style={styles.scrollview}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SubjectPage', {turkce_data});
          }}>
          <LinearGradient
            colors={['#00B241', '#006769']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.button_gradient}>
            <View style={styles.button_border}>
              <Text style={styles.button_text}>Türkçe</Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SubjectPage');
          }}>
          <LinearGradient
            colors={['#FFBD33', '#FF8000']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.button_gradient}>
            <View style={styles.button_border}>
              <Text style={styles.button_text}>Matematik</Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SubjectPage');
          }}>
          <LinearGradient
            colors={['#FE2784', '#B4028C']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.button_gradient}>
            <View style={styles.button_border}>
              <Text style={styles.button_text}>Geometri</Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SubjectPage');
          }}>
          <LinearGradient
            colors={['#67E8EB', '#09A5D7']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.button_gradient}>
            <View style={styles.button_border}>
              <Text style={styles.button_text}>Tarih</Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SubjectPage');
          }}>
          <LinearGradient
            colors={['#FF7385', '#F40026']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.button_gradient}>
            <View style={styles.button_border}>
              <Text style={styles.button_text}>Coğrafya</Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SubjectPage');
          }}>
          <LinearGradient
            colors={['#B788FE', '#661EAD']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.button_gradient}>
            <View style={styles.button_border}>
              <Text style={styles.button_text}>Vatandaşlık</Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginBottom: 20}}
          onPress={() => {
            console.log('Sınav Hakkında');
          }}>
          <LinearGradient
            colors={['#000000', '#000000']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.button_gradient}>
            <View style={styles.button_border}>
              <Text style={styles.button_text}>Sınav Hakkında</Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Lessons;
