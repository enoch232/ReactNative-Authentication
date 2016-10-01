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

}from "react-native"

const ds = new ListView.DataSource({rowHasChanged: (r1, r2)=> r1 !== r2})
export default class DashBoardPage extends Component{
	constructor(props){
		super(props)
		
		this.state = {
			access_token: "",
			dataSource: ds.cloneWithRows([]),
		}

	}
	async componentDidMount(){
		try{
			const access_token = await AsyncStorage.getItem("access_token")
			let response = await fetch('http://localhost:3000/posts?access_token='+access_token ,{
				method: 'GET',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				}
			})
			let responseJson = await response.json()
			this.setState({
				dataSource: ds.cloneWithRows(responseJson)
			})
		}catch(error){
			console.error(error)
		}
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
			    renderRow={(rowData) => {return this._renderPostRows(rowData)}}
			  />
			</View>
		)
	}
	_renderPostRows(rowData){
		return(
			<View style = {styles.postRow}>
				<View style = {styles.postTop}>
					<Text style = {styles.postTitle}>{rowData.title}</Text>
					<TouchableOpacity  style = {styles.likeButton}  >
						<Icon name = "thumbs-o-up" size = {15}/>
					</TouchableOpacity>
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
		alignItems: "center",
		height:200
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
	postRow:{
		backgroundColor:"lightgray",
		height: 60
	},
	postTitle:{
		paddingTop: 5,
		textAlign: "center",
		fontSize: 15,
		flex:4
	},
	likeButton:{
		backgroundColor: "skyblue",
		
	},
	postTop:{
		flexDirection: "row",

	}
})