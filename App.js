import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CameraComponent from './src/camera';
import Title from './src/title';

export default function App() {
	return (
		<>
			<View style={styles.homescreen}>
				<Title text='Clozify' />
				<Text>Open up App.js to start working on your app!</Text>
				<CameraComponent />
			</View>
			<StatusBar style='auto' />
		</>
	);
}

const styles = StyleSheet.create({
	homescreen: {
		flex: 1,
		backgroundColor: 'black',
		paddingVertical: 48,
		paddingHorizontal: 24,
	},
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// import React from 'react';
// import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// import { Camera } from 'expo-camera';

// export default class HomeScreen extends React.Component {
// 	state = {
// 		hasPermission: null,
// 		type: Camera.Constants.Type.back,
// 	};

// 	async componentDidMount() {
// 		const { status } = await Camera.requestPermissionsAsync();
// 		this.setState({ hasPermission: status === 'granted' });
// 	}

// 	handleTakePicture = async () => {
// 		if (this.camera) {
// 			const photo = await this.camera.takePictureAsync();
// 			// Preprocess the image and send it to the AI model
// 			// ...
// 		}
// 	};

// 	render() {
// 		const { hasPermission } = this.state;
// 		if (hasPermission === null) {
// 			return <View />;
// 		}
// 		if (hasPermission === false) {
// 			return <Text>No access to camera</Text>;
// 		}
// 		return (
// 			<View style={styles.container}>
// 				<Camera style={styles.camera} type={this.state.type}>
// 					<View style={styles.buttonContainer}>
// 						<TouchableOpacity
// 							style={styles.button}
// 							onPress={this.handleTakePicture}
// 						>
// 							<Text style={styles.buttonText}>Take Picture</Text>
// 						</TouchableOpacity>
// 					</View>
// 				</Camera>
// 			</View>
// 		);
// 	}
// }

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 	},
// 	camera: {
// 		flex: 1,
// 	},
// 	buttonContainer: {
// 		flex: 1,
// 		backgroundColor: 'transparent',
// 		flexDirection: 'row',
// 		alignSelf: 'flex-end',
// 	},
// 	button: {
// 		backgroundColor: '#fff',
// 		borderRadius: 5,
// 		padding: 15,
// 		alignSelf: 'flex-end',
// 	},
// 	buttonText: {
// 		fontSize: 18,
// 		color: 'black',
// 	},
// });
