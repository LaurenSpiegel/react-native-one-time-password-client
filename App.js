import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import firebaseConfig from './firebase.js';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';

export default class App extends React.Component {
  componentDidMount(){
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Sign Up</Text>
        <SignUpForm />
        <Text>Log In</Text>
        <LoginForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
