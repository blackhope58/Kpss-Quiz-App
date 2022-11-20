import React from 'react';
import {View, Text, FlatList, StatusBar} from 'react-native';
import styles from './Subject.style';

import SubjectCard from '../../components/SubjectCard';

const Subject = ({route, navigation}) => {
  let data = route.params.turkce_data;

  const renderItem = ({item}) => (
    <SubjectCard subject={item} navigation={navigation} />
  );

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor={'#048f94'} />
      <FlatList data={data} renderItem={renderItem} />
    </View>
  );
};
export default Subject;
