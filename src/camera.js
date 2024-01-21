import { Camera } from 'expo-camera';
import { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { Button } from '@rneui/themed';

const CameraComponent = () => {
	// const [hasPermission, setHasPermission] = Camera.useCameraPermissions();
	// const [cameraOpen, setCameraOpen] = useState(false);

	// useEffect(() => {
	// 	(async () => {
	// 		const { status } = await Camera.requestCameraPermissionsAsync();
	// 		setHasPermission(status === 'granted');
	// 	})();
	// }, []);

	// if (hasPermission === null) {
	// 	return <View />;
	// }
	// if (hasPermission === false) {
	// 	return <Text>No access to camera</Text>;
	// }
	const [permission, setPermission] = Camera.useCameraPermissions();
	const [cameraOpen, setCameraOpen] = useState(false);

	const onCLick = async () => {
		if (!permission.granted) {
			await Camera.requestCameraPermissionsAsync();
		} else {
			setCameraOpen(true);
		}
	};

	return (
		<View>
			{cameraOpen && <Camera style={{ width: 200, height: 200 }} />}
			<Button
				title='Open Camera'
				buttonStyle={{ backgroundColor: 'rgba(39, 39, 39, 1)' }}
				onPress={onCLick}
				containerStyle={{
					width: 200,
				}}
				titleStyle={{ color: 'white', marginHorizontal: 20 }}
			/>
		</View>
	);
};

export default CameraComponent;
