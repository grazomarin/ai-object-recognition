import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Title = ({ text }) => {
	return <Text style={styles.titleStyle}>{text}</Text>;
};

const styles = StyleSheet.create({
	titleStyle: {
		fontSize: 24, // example font size
		fontWeight: 'bold', // example font weight
		color: 'white', // example text color
	},
});

export default Title;
