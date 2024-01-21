import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Title = ({ text, css }) => {
	const styles = StyleSheet.create({
		titleStyle: {
			fontSize: 28, // example font size
			fontWeight: 'bold', // example font weight
			color: 'white', // example text color
			...css, // example custom styles
		},
	});

	return <Text style={styles.titleStyle}>{text}</Text>;
};

export default Title;
