import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import Home from './src/screens/Home';

const App = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}>
      <StatusBar />
      <Home />
    </SafeAreaView>
  );
};

export default App;
