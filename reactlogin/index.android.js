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
import RootPage from "./app/routes/root";
import SignInPage from "./app/routes/signin";
import SignUpPage from "./app/routes/signup";
import DashboardPage from "./app/routes/dashboard";

class reactlogin extends Component {

  render() {
    return(
      <Navigator 
        initialRoute = {{title: "Home"}}
        renderScene = {function(route, navigator){
          if (route.title == "Home"){
            return <RootPage navigator = {navigator}/>
          }
          if (route.title == "SignIn"){
            return <SignInPage navigator = {navigator}/>
          }
          if (route.title == "SignUp"){
            return <SignUpPage navigator = {navigator}/>
          }
          if (route.title = "Dashboard"){
            return <DashboardPage navigator = {navigator}/>
          }
        }}
      >
      </Navigator>
    )
  }
}

AppRegistry.registerComponent('reactlogin', () => reactlogin);
