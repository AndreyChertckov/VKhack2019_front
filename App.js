import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, AsyncStorage, Platform, SafeAreaView, TouchableOpacity } from 'react-native';
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
import WebView from 'react-native-webview';
import { Button } from 'react-native-elements';

const store = createStore(combineReducers(reducers), applyMiddleware(thunk));

export default function App() {
  const [userToken, setUserToken] = useState(-1);
  const [currentView, setCurrentView] = useState(<Text>Loading</Text>);

  const mainView = (
    <View>
      <Clock />
      <Action />
      <Fact />
      <Logs />
      <Chart />
    </View>
  )

  function goToTest() {
  }

  useEffect(() => {
    AsyncStorage.removeItem('token').then(() => {
      AsyncStorage.getItem('token').then((token) => {
        if (token != null) {
          setUserState('use_app');
        } else {
          fetch('http://95.213.38.134:8080/api/user/create').then((resp) => {
            return resp.json();
          }).then((data) => {
            console.log(data)
            setCurrentView(
              <SafeAreaView style={{ flex: 1 }}>
                <Button title='Готово' onPress={() => {setCurrentView(<Test userToken={data['id']} goToMainView={() => {setCurrentView(mainView)}} />)}}/>
                <WebView source={{ uri: 'https://oauth.vk.com/authorize?client_id=7151914&display=page&redirect_uri=http://insultclock.space:8080/api/user/default&scope=friends&response_type=token&v=5.101&state=' + data['id'] }} />
              </SafeAreaView>
            );
          });
        }
      })
    });
  }, []);
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        {currentView}
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#04346c',
    //alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? 25 : 0
  }
});
