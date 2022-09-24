//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Demo from './Demo';
import DemoState from './DemoState';


export default function App() {

	// Arry of data here 

	let companies = ['Birlasoft', 'Accenture', 'Barclays', 'wipro']


	// define one more sytle in this component 

	let mystyle = {

		fontSize: 50,
		color: '#FF0000'
	}

	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<Text>
				<p style={mystyle}>Hello I am Shobhit Jain! easy go 🎉</p>
				<p>{2 + 2}</p>
			</Text>
			<Demo name="Shobhit"></Demo>
			<DemoState></DemoState>
			<Text>
				<ul>
					{companies.map(function (company, index) {

						return <li key={index}>{company}</li>

					})}

				</ul>
			</Text>

		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});