/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

class reactlogin extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <Text style={styles.title}>
          React Login Apps
        </Text>
        <Text>
        </Text>

      </View>
    );
  }
  renderLogin(){
    return(
      <TouchableHighlight>
      Hello
      </TouchableHighlight>

    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1
  },
  title:{
    fontSize: 30,
    textAlign: "center",
    alignItems: "flex-end",
    top:30
  }

});


AppRegistry.registerComponent('reactlogin', () => reactlogin);
