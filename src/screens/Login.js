import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const Login = () => {
  return (
    <LinearGradient
      colors={['#d6ff49', '#15e6e0']}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      style={styles.container}>
      <Text>Login</Text>
    </LinearGradient>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //gradient background green to dark green
    alignItems: 'center',
    justifyContent: 'center',
  },
});
