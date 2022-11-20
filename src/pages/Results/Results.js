import React, {useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  BackHandler,
  StatusBar,
} from 'react-native';

import styles from './Results.style';

const Results = ({navigation, route}) => {
  console.log(route.params);
  let emptyCounter =
    route.params.count - (route.params.trueCounter + route.params.falseCounter);

  function handleBackButtonClick() {
    navigation.navigate('LessonsPage');
    return true;
  }
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleBackButtonClick,
      );
    };
  }, []);
  return (
    <View style={{justifyContent: 'space-evenly', flex: 1}}>
      <StatusBar translucent backgroundColor={'#8c013e'} />
      <View style={styles.container}>
        <Text style={styles.header_text}>Test Bitti!</Text>
        <View style={styles.remaining_question_container}>
          <Text style={styles.remaining_question_text}>Toplam Soru</Text>
          <View style={styles.remaining_question_counter_bg}>
            <Text style={styles.remaining_question_number}>
              {route.params.count}
            </Text>
          </View>
        </View>
        <View style={styles.true_container}>
          <View style={styles.true_counter_bg}>
            <Text style={styles.true_counter}>{route.params.trueCounter}</Text>
          </View>
          <Text style={styles.true}>Doğru</Text>
        </View>
        <View style={styles.wrong_container}>
          <View style={styles.wrong_counter_bg}>
            <Text style={styles.wrong_counter}>
              {route.params.falseCounter}
            </Text>
          </View>
          <Text style={styles.wrong}>Yanlış</Text>
        </View>
        <View style={styles.empty_container}>
          <View style={styles.empty_counter_bg}>
            <Text style={styles.empty_counter}>{emptyCounter}</Text>
          </View>
          <Text style={styles.empty}>Boş</Text>
        </View>
      </View>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity
          style={styles.next_button}
          onPress={() => {
            navigation.navigate('LessonsPage');
          }}>
          <Text style={styles.next_button_text}>Geri Dön</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Results;
