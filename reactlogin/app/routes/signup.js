import React, {Component} from "react"
import {
	Navigator,
	Text,
	TextInput,
	View

}from "react-native";
export default class SignUpPage extends Component{
	render(){
		return(
			<View style = {styles.container}>
				<Text>Sign Up</Text>
				<Text style = {styles.label}>Name: </Text>
				<TextInput style = {styles.nameTextInput} />
				<Text style = {styles.label}>Email: </Text>
				<TextInput style = {styles.emailTextInput} />
				<Text style = {styles.label}>Password: </Text>
				<TextInput style = {styles.passwordTextInput} />
				<Text style = {styles.label}>Password Confirmation: </Text>
				<TextInput style = {styles.passwordConfirmationTextInput} />
			</View>
		)
	}
}
const styles = {
	container:{
		flex: 1,
		left: 30,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "flex-start"
	},
	label:{
		textAlign:"left"
	},
	nameTextInput: {
		height:40,
		borderColor: "gray",
		borderWidth: 1,
		width:200
	},
	emailTextInput: {
		height:40,
		borderColor: "gray",
		borderWidth: 1,
		width:200
	},
	passwordTextInput: {
		height:40,
		borderColor: "gray",
		borderWidth: 1,
		width:200
	},
	passwordConfirmationTextInput: {
		height:40,
		borderColor: "gray",
		borderWidth: 1,
		width:200
	}


}