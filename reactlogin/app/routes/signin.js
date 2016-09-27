import React, {Component} from "react";
import Icon from "react-native-vector-icons/FontAwesome"
import {
	Text,
	View,
	TouchableOpacity,
	StyleSheet,
	Navigator,
	TextInput,
	A
} from "react-native"
export default class SignInPage extends Component{
	constructor(props){
		super(props)
		this.state = {name: "hello"}
	}
	_backPress(){
		this.props.navigator.pop();
	}
	render(){
		return(
			<View>
				<View style = {styles.container}>
					<View style = {styles.headerContainer}>
						<TouchableOpacity onPress = {this._backPress.bind(this)}>
							<Icon name = "chevron-left" size = {30} style = {styles.backButton} />
						</TouchableOpacity>
						<Text style = {{fontSize: 30}}>SignIn</Text>
					</View>
				</View>
				<View style = {styles.inputContainer}>
					<Text style = {styles.label}>Name: </Text>
					<TextInput style = {styles.nameTextInput} value = {this.state.name} onChangeText = {(name)=>{this.setState({name})}} ></TextInput>
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
	}



})