import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './SubjectCard.style';

const SubjectCard = ({subject, navigation}) => {
  let count = Object.keys(subject.questions).length;
  return (
    <View style={styles.container}>
      <View style={styles.card_bg}>
        <View style={styles.count_container}>
          <View style={styles.count_bg}>
            <Text style={styles.count_text}>{count}</Text>
          </View>
        </View>
        <View style={styles.subject_container}>
          <Text style={styles.subject_text}>{subject.subject}</Text>
        </View>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('QuestionPage', {subject});
            }}>
            <Text style={styles.button_text}>Başla</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SubjectCard;
