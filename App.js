import React, {Component, useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Home from './Home'
import {BlogProvider} from './BlogContext'
import Detail from './Detail';
import {Provider} from 'react-redux'
import store from './store'
/* case: 
1: Truyen du lieu state tu parent component toi child
  useContext: Chi su dung duoc cho function return jsx, giup truyen data toi bat cu jsx nao
              Voi component co the su dung consumer de lay gia tri??
2: Truyen du lieu state tu child toi parent
3: Truyen du lieu tu child toi parent khong can component trung gian


*/

const StackNavigator = createStackNavigator({
  Home: {
    screen: Home
  },
  Detail: Detail
})

const App = createAppContainer(StackNavigator);

export default () => {
  return <Provider store = {store}>
             <App />
         </Provider>
}



