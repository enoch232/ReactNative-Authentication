import React, {Component} from "react"
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Navigator
}from "react-native";

export default class RootPage extends Component{
	_onPressButton(routeName){
		if (routeName == "SignIn"){
			this.props.navigator.push({
				title: "SignIn"
			})
		}
		if (routeName == "SignUp"){
			this.props.navigator.push({
				title: "SignUp"
			})
		}
	}
	render(){
		return(
		  <View style = {styles.container}>
        <Text style={styles.title}>
          React Login Apps
        </Text>
        <TouchableOpacity style = {styles.logInButton} onPress = {this._onPressButton.bind(this, "SignIn")}>
          <Text style = {styles.logInButtonText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.signUpButton} onPress = {this._onPressButton.bind(this, "SignUp")}>
          <Text style = {styles.signUpButtonText} >Sign Up</Text>
        </TouchableOpacity>
	     </View>
		)
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

})