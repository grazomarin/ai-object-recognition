import { Camera } from 'expo-camera';
import { useState, useEffect } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { SvgXml } from 'react-native-svg';
import closeMarkup from './image-sources/close';
import shutterMarkup from './image-sources/shutter';

const CameraComponent = ({ setCameraOpen }) => {
	const [permission, setPermission] = Camera.useCameraPermissions();

	useEffect(() => {
		(async () => {
			const { status } = await Camera.requestCameraPermissionsAsync();
		})();
	});

	return (
		<View style={styles.background}>
			<SvgXml
				xml={closeMarkup}
				style={styles.close}
				onPress={() => {
					setCameraOpen(false);
				}}
			/>
			<Camera style={styles.camera} />
			<SvgXml xml={shutterMarkup} style={styles.shutter} />
		</View>
	);
};

const styles = StyleSheet.create({
	camera: {
		flex: 1,
		aspectRatio: 9 / 16,
	},
	close: {
		position: 'absolute',
		top: 40,
		left: 20,
		zIndex: 1,
		padding: 10,
	},
	shutter: {
		position: 'absolute',
		bottom: 40,
	},
	background: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		height: Dimensions.get('screen').height,
		width: Dimensions.get('screen').width,
		backgroundColor: 'black',
		opacity: 1,
		zIndex: 0,
	},
});

export default CameraComponent;
