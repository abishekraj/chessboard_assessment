/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import HomePage from './src/views/HomePage'

import {
  SafeAreaView,
  ScrollView,
} from 'react-native';

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }}>
      <SafeAreaView >
        <ScrollView>
          <HomePage />
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default App;
