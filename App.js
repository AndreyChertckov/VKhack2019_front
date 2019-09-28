import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, AsyncStorage, Platform, SafeAreaView } from 'react-native';
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
  const [userState, setUserState] = useState('use_app');
  useEffect(() => {
    AsyncStorage.getItem('token').then((token) => {
      if (token == null) {
        fetch('http://95.213.38.134:8080/api/user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ name: 'Andrey Chertkov' })
        }).then((resp) => {
          return resp.json();
        }).then((json) => {
          AsyncStorage.setItem('token', "" + json['id']);
        });
      }
      setUserState('use_app');
    });
  });
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        {(userState == 'use_app') ? (<View>
          <Clock />
          <Action />
          <Fact />
          <Logs />
          <Chart />
        </View>) :
          (<Test />)}
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
