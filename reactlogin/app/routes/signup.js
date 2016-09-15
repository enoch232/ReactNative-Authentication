import React, {Component} from "react"
import {
	Navigator,
	Text,
	TextInput,
	View,
	TouchableOpacity

}from "react-native";
export default class SignUpPage extends Component{
	constructor(props){
		super(props)
		this.state = {name:"", email: "", password:"", passwordConfirmation: ""}
	}
	async _signupPress(){
		try{
			let response = await fetch('http://localhost:3000/users', {
			  method: 'POST',
			  headers: {
			    'Accept': 'application/json',
			    'Content-Type': 'application/json',
			  },
			  body: JSON.stringify({
			  	user:{
			  		name: this.state.name,
				    email: this.state.email,
				    password: this.state.password,
				    password_confirmation: this.state.passwordConfirmation
			  	}
			  })
			})
			this.setState({response: "registered!"})
		} catch(error){
			console.error(error)
		}
	}
	render(){
		return(
			<View>
				<View style = {styles.container} >
					<Text style = {{fontSize: 30}}>Sign Up</Text>
				</View>
				<View style = {styles.inputContainer}>
					<Text style = {styles.label} >{this.state.response}</Text>
					<Text style = {styles.label} >Name: </Text>
					<TextInput style = {styles.nameTextInput} value={this.state.name} onChangeText = {(name) => this.setState({name})}/>
					<Text style = {styles.label}>Email: </Text>
					<TextInput style = {styles.emailTextInput} value = {this.state.email} onChangeText = {(email) => this.setState({email})}/>
					<Text style = {styles.label}>Password: </Text>
					<TextInput style = {styles.passwordTextInput} secureTextEntry={true} value = {this.state.password} onChangeText = {(password) => this.setState({password})}/>
					<Text style = {styles.label}>Password Confirmation: </Text>
					<TextInput style = {styles.passwordConfirmationTextInput} secureTextEntry = {true} value = {this.state.passwordConfirmation} onChangeText = {(passwordConfirmation)=> this.setState({passwordConfirmation})}/>
					<TouchableOpacity onPress = {this._signupPress.bind(this)}><Text>Sign Up</Text></TouchableOpacity>
				</View>
			</View>
		)
	}
}
const styles = {
	container:{
		flex: 1,
		justifyContent: "center",
		flexDirection: "column",
		alignItems: "center",
		backgroundColor: "coral"

	}
	,
	inputContainer:{
		flex: 1,
		left: 30,
		top: 60,
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
		width:200,
		borderRadius: 5,
		padding: 10
	},
	emailTextInput: {
		height:40,
		borderColor: "gray",
		borderWidth: 1,
		width:200,
		borderRadius: 5,
		padding: 10
	},
	passwordTextInput: {
		height:40,
		borderColor: "gray",
		borderWidth: 1,
		width:200,
		borderRadius: 5,
		padding: 10
	},
	passwordConfirmationTextInput: {
		height:40,
		borderColor: "gray",
		borderWidth: 1,
		width:200,
		borderRadius: 5,
		padding: 10
	}


}