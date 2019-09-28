import React from 'react';
import { StyleSheet, Text, View, Platform, SafeAreaView } from 'react-native';
import SandBox from './src/components/SandBox';
import Clock from './src/containers/Clock';
import Action from './src/containers/Action';
import Fact from './src/containers/Fact';
import Logs from './src/containers/Logs';
import Chart from './src/containers/Chart';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import * as reducers from './src/store/reducers';

const store = createStore(combineReducers(reducers), applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Clock/>
        <Action/>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#04346c',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? 25 : 0
  }
});
