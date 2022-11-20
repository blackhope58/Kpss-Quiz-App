import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import styles from './Question.style';

const Question = ({route, navigation}) => {
  let que = route.params.subject.questions;
  let queA = route.params.subject;
  let count = Object.keys(route.params.subject.questions).length;

  const [qNumber, setQNumber] = useState(0);
  const [nQuestion, setNQuestion] = useState(count);
  const [cStyleText, setCStyleText] = useState(0);
  const [cStyleButtonA, setCStyleButtonA] = useState(styles.button_a);
  const [cStyleButtonB, setCStyleButtonB] = useState(styles.button_b);
  const [cStyleButtonC, setCStyleButtonC] = useState(styles.button_c);
  const [cStyleButtonD, setCStyleButtonD] = useState(styles.button_d);
  const [trueAnswer, setTrueAnswer] = useState(que[qNumber].a_T);
  const [counterStatus, setCounterStatus] = useState(false);
  const [trueCounter, setTrueCounter] = useState(0);
  const [falseCounter, setFalseCounter] = useState(0);

  function changeStyleText() {
    if (que[qNumber].q_text === null) {
      setCStyleText(styles.q_text_null);
    } else {
      setCStyleText(styles.q_text);
    }
  }

  useEffect(() => {
    changeStyleText();
    setTrueAnswer(que[qNumber].a_T);
  });
  return (
    <View style={styles.contianer}>
      <StatusBar translucent backgroundColor={'#1d8c01'} />
      <View style={styles.header_container}>
        <Text style={styles.header_text}>{route.params.subject.subject}</Text>
      </View>
      <View style={styles.q_container_space}>
        <View style={styles.q_container}>
          <Text style={cStyleText}>{que[qNumber].q_text}</Text>
          <Text style={styles.q_text_alt}>{que[qNumber].q}</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.true_container}>
            <View style={styles.true_counter_bg}>
              <Text style={styles.true_counter}>{trueCounter}</Text>
            </View>
            <Text style={styles.true}>Doğru</Text>
          </View>
          <View style={styles.wrong_container}>
            <View style={styles.wrong_counter_bg}>
              <Text style={styles.wrong_counter}>{falseCounter}</Text>
            </View>
            <Text style={styles.wrong}>Yanlış</Text>
          </View>
        </View>
        <View style={styles.remaining_question_container}>
          <Text style={styles.remaining_question_text}>Kalan</Text>
          <View style={styles.remaining_question_counter_bg}>
            <Text style={styles.remaining_question_number}>{nQuestion}</Text>
          </View>
        </View>
      </View>
      <View style={styles.button_container}>
        <TouchableOpacity
          style={cStyleButtonA}
          onPress={() => {
            if (trueAnswer === 'A') {
              setCStyleButtonA(styles.button_true);
              if (counterStatus === false) {
                setCounterStatus(true);
                setTrueCounter(trueCounter + 1);
              }
            } else {
              setCStyleButtonA(styles.button_false);
              if (counterStatus === false) {
                setCounterStatus(true);
                setFalseCounter(falseCounter + 1);
              }
            }
          }}>
          <Text style={styles.button_a_text}>{que[qNumber].a_A}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={cStyleButtonB}
          onPress={() => {
            if (trueAnswer === 'B') {
              setCStyleButtonB(styles.button_true);
              if (counterStatus === false) {
                setCounterStatus(true);
                setTrueCounter(trueCounter + 1);
              }
            } else {
              setCStyleButtonB(styles.button_false);
              if (counterStatus === false) {
                setCounterStatus(true);
                setFalseCounter(falseCounter + 1);
              }
            }
          }}>
          <Text style={styles.button_b_text}>{que[qNumber].a_B}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={cStyleButtonC}
          onPress={() => {
            if (trueAnswer === 'C') {
              setCStyleButtonC(styles.button_true);
              if (counterStatus === false) {
                setCounterStatus(true);
                setTrueCounter(trueCounter + 1);
              }
            } else {
              setCStyleButtonC(styles.button_false);
              if (counterStatus === false) {
                setCounterStatus(true);
                setFalseCounter(falseCounter + 1);
              }
            }
          }}>
          <Text style={styles.button_c_text}>{que[qNumber].a_C}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={cStyleButtonD}
          onPress={() => {
            if (trueAnswer === 'D') {
              setCStyleButtonD(styles.button_true);
              if (counterStatus === false) {
                setCounterStatus(true);
                setTrueCounter(trueCounter + 1);
              }
            } else {
              setCStyleButtonD(styles.button_false);
              if (counterStatus === false) {
                setCounterStatus(true);
                setFalseCounter(falseCounter + 1);
              }
            }
          }}>
          <Text style={styles.button_d_text}>{que[qNumber].a_D}</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={styles.next_button}
          onPress={() => {
            if (qNumber == count - 1) {
              navigation.navigate('ResultsPage', {
                queA,
                trueCounter,
                falseCounter,
                count,
              });
            } else {
              setQNumber(qNumber + 1);
            }
            setNQuestion(nQuestion - 1);
            setCStyleButtonA(styles.button_a);
            setCStyleButtonB(styles.button_b);
            setCStyleButtonC(styles.button_c);
            setCStyleButtonD(styles.button_d);
            setCounterStatus(false);
          }}>
          <Text style={styles.next_button_text}>Sonraki</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Question;
