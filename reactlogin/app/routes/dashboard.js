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

export default class DashBoardPage extends Component{
	constructor(props){
		super(props)
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2)=> r1 !== r2})
		this.state = {
			access_token: "",
			dataSource: ds.cloneWithRows(['Post1', 'Post2']),
		}

	}
	componentDidMount(){
		AsyncStorage.getItem("access_token").then((value) => {
	        this.setState({access_token: value})
	    }).catch((error)=>console.error(error)).done()

	}
	_backPress(){
		this.props.navigator.pop()

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
				<ListView
			    dataSource={this.state.dataSource}
			    renderRow={(rowData) => <Text>{rowData}</Text>}
			  />
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