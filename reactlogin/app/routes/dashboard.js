import React, {Component} from "react"
import Icon from 'react-native-vector-icons/FontAwesome'
import {
	Navigator,
	Text,
	TextInput,
	View,
	TouchableOpacity,
	ListView,
	AsyncStorage,
	StyleSheet

}from "react-native";
export default class SignUpPage extends Component{
	constructor(props){
		super(props)
		const ds = ListView.DataSource({rowHasChanged: (r1, r2)=> r1 !== r2})
		
		
	}
	_backPress(){
		this.props.navigator.pop()

	}
	async _getAccessToken(){
		try{
			var access_token = await AsyncStorage.getItem("access_token")
			this.state.access_token = access_token
		}catch(error){
			console.log("Error getting access_token")
		}
	}
	render(){
		return (
			<View>
				<View style = {styles.container} >
					<View style = {styles.headerContainer}>
						<TouchableOpacity onPress = {this._backPress.bind(this)}>
							<Icon name = "chevron-left" size = {30} style = {styles.backButton} />
						</TouchableOpacity>
						<Text style = {{fontSize: 30}}>DashBoard</Text>
					</View>
				</View>
				<Text>{this.state.access_token}</Text>
				<TouchableOpacity onPress = {this._getAccessToken.bind(this)}></TouchableOpacity>
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
	}
})