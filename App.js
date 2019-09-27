import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SandBox from './src/components/SandBox';
import Clock from './src/containers/Clock';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import * as reducers from './src/store/reducers';

const store = createStore(combineReducers(reducers), applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Clock></Clock>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
