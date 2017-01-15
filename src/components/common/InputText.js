import React from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';

const InputText = ({ value, onChangeText, label, secureTextEntry }) => {
	const { containerStyle, labelStyle, autoCapitalize, inputTextStyle } = styles;

	return (
		<View style={containerStyle}>
			<Text style={labelStyle}>{label}</Text>
			<TextInput 
				style={inputTextStyle} 
				value={value} 
				onChangeText={onChangeText} 
				autoCapitalize={autoCapitalize || 'none'}
				secureTextEntry={secureTextEntry || false}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	containerStyle: {
		margin: 10,
		alignItems: 'center',
		flexDirection: 'row'
	},
	labelStyle: {
		flex: 1,
		fontSize: 20,
		fontWeight: '500'
	},
	inputTextStyle: {
		flex: 3,
		borderWidth: 1,
		borderRadius: 4,
		fontSize: 15,
		minHeight: 50,
		padding: 10
	}
});

export { InputText };