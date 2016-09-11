/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

class reactlogin extends Component {

  render() {
    return (
      <View style = {styles.container}>
        <Text style={styles.title}>
          React Login Apps
        </Text>
        <TouchableOpacity style = {styles.logInButton} onPress = {this._onPressLogInButton} >
          <Text style = {styles.logInButtonText} >Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.signUpButton} >
          <Text style = {styles.signUpButtonText} >Sign Up</Text>
        </TouchableOpacity>
      </View>
    );
  }
  _onPressLogInButton(){

  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    top: -150,
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: "center"

  },
  title:{
    fontSize: 30,
    textAlign: "center",
  },
  logInButton:{
    margin: 10,
    padding: 5,
    width: 90,
    height: 40,
    backgroundColor: "skyblue"
  },
  logInButtonText:{
    textAlign: "center",
    fontSize: 20
  },
  signUpButton: {
    margin: 10,
    padding: 5,
    width: 90,
    height: 40,
    backgroundColor: "skyblue"
  },
  signUpButtonText:{
    textAlign: "center",
    fontSize: 20
  }

});


AppRegistry.registerComponent('reactlogin', () => reactlogin);
