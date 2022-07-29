import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import Home from './src/screens/Home';
import Login from './src/screens/Login';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor="#d6ff49" />
      <Login />
    </SafeAreaView>
  );
};

export default App;
