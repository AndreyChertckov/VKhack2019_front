import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, AsyncStorage, Platform, SafeAreaView, ScrollView } from 'react-native';
import SandBox from './src/components/SandBox';
import Clock from './src/containers/Clock';
import Action from './src/containers/Action';
import Fact from './src/containers/Fact';
import Logs from './src/containers/Logs';
import Chart from './src/containers/Chart';
import Test from './src/containers/Test';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import * as reducers from './src/store/reducers';

const store = createStore(combineReducers(reducers), applyMiddleware(thunk));

export default function App() {  
  const [userState, setUserState] = useState('test');
  useEffect(() => {
    AsyncStorage.getItem('token').then((token) => {
      if (token != null) {
        setUserState('use_app');
      }
    });
  }, []);
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.body}>
        {(userState == 'use_app') ? (<ScrollView>
          <Clock />
          {/* <Action /> */}
          <Fact />
          <Logs />
          <Chart />
        </ScrollView>) :
          (<Test setUserState={setUserState} />)}
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#04346c',
    paddingTop: Platform.OS === 'android' ? 25 : 0
  }
});
