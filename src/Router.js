import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './pages/Home';
import Lessons from './pages/Lessons';
import Subject from './pages/Subject';
import Quesiton from './pages/Question';
import Results from './pages/Results';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomePage" component={Home} />
        <Stack.Screen name="LessonsPage" component={Lessons} />
        <Stack.Screen name="SubjectPage" component={Subject} />
        <Stack.Screen name="QuestionPage" component={Quesiton} />
        <Stack.Screen name="ResultsPage" component={Results} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
