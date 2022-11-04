/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import AlbumList from './src/components/AlbumList';
import PhotoList from './src/components/PhotoList';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from 'react-redux';
import reducer from "./src/components/reducer";

 import {
   SafeAreaView,
   StyleSheet,
   ScrollView,
   View,
   Text,
   StatusBar,
 } from 'react-native';
 
 import {
   Header,
   LearnMoreLinks,
   Colors,
   DebugInstructions,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 
 
const Stack = createStackNavigator();
const reduxStore = createStore(reducer);
const styles = {
  backgroundColor: '#141414'
}

const store = createStore(reducer);

App = () => (
  <NavigationContainer>
    <Provider store ={reduxStore}> 
      <Stack.Navigator screenOptions={{
          headerStyle: { elevation: 0, backgroundColor: '#' },
          headerTintColor: '#fff',
          headerTitleStyle: {color: '#fff'},
          cardStyle: { backgroundColor: '#141414' }
      }}>
        <Stack.Screen
          name="albumList"
          component={AlbumList}
          options={{title: 'Albums'}}
        />
      
        <Stack.Screen
          name="photoList"
          component={PhotoList}
          options={{title: 'Photos'}}
        />
      
      </Stack.Navigator>
    </Provider>
  </NavigationContainer>
  
  
);



 export default App;