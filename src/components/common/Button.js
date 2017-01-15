import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ onPress, children }) => {
	const { buttonStyle, textButtonStyle } = styles;

	return (
		<TouchableOpacity style={buttonStyle} onPress={onPress}>
			<Text style={textButtonStyle}>{children}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	buttonStyle: {
		padding: 10,
		borderWidth: 1,
		borderRadius: 4,
		margin: 10
	},
	textButtonStyle: {
		fontSize: 20,
		fontWeight: '700',
		alignSelf: 'center'
	}
});

export { Button };