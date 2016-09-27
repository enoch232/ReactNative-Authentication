import React, {Component} from "react"
import Icon from 'react-native-vector-icons/FontAwesome'
import {
	AsyncStorage,
	Navigator,
	Text,
	TextInput,
	View,
	TouchableOpacity,
	StyleSheet

}from "react-native";
export default class SignUpPage extends Component{
	constructor(props){
		super(props)
		this.state = {name:"", email: "", password:"", passwordConfirmation: ""}

	}
	_backPress(){
		this.props.navigator.pop()

	}
	_signUpPress() {
    	return fetch('http://localhost:3000/users', {
			method: 'POST',
			headers: {
			  'Accept':"application/json",
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
      	.then((response) => {
      		return response.json()
      	})
      	.then((responseJson)=>{
      		this.setState({response: "Successfully Registered!"})
      		AsyncStorage.setItem("access_token", responseJson.access_token)
      	})

      	.catch((error) => {
        	console.error(error)
      	})
  	}
	
	render(){
		return(
			<View>
				<View style = {styles.container} >
					<View style = {styles.headerContainer}>
						<TouchableOpacity onPress = {this._backPress.bind(this)}>
							<Icon name = "chevron-left" size = {30} style = {styles.backButton} />
						</TouchableOpacity>
						<Text style = {{fontSize: 30}}>Sign Up</Text>
					</View>
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
					<TouchableOpacity style = {styles.signUpButton} onPress = {this._signUpPress.bind(this)}><Text style = {{textAlign:"center"}}>Sign Up</Text></TouchableOpacity>
				</View>
			</View>
		)
	}
}
const styles = StyleSheet.create({
	container:{
		flex: 1,
		justifyContent: "center",
		flexDirection: "column",
		alignItems: "center",
		backgroundColor: "coral"

	}
	,
	headerContainer:{
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center"
	},
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
	backButton:{
		color: "black",
		left: -10
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
	},
	signUpButton: {
		height: 40,
		width: 200,
		backgroundColor: "skyblue",
		borderRadius: 5,
		borderColor: "skyblue",
		borderWidth: 1,
		padding: 10,
		marginTop: 10
	}
})
