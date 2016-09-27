import React from 'react'
import {
	Navigator,
	Text,
	TextInput,
	View,
	TouchableOpacity,
	ListView

}from "react-native";
export default class SignUpPage extends Component{
	constructor(props){
		super(props)
		const ds = ListView.DataSource({rowHasChanged: (r1, r2)=> r1 !== r2})
		AsyncStorage.getItem("access_token")
      				.then((value)=>{
      					this.setState({: storage)
      				}).done()
	}
	render(){
		return (
			<View>
				<Text>DashBoard</Text>
			</View>
		)
	}
}