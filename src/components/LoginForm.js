import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { Button, InputText, Spinner } from './common';

import { changeLoginEmail, changeLoginPassword, loginUser, registerUser } from '../actions';

class LoginForm extends Component {
	onLoginPress() {
		const { email, password } = this.props;

		this.props.loginUser({ email, password });
	}

	onRegisterPress() {
		const { email, password } = this.props;
		this.props.registerUser({ email, password });
	}

	renderError() {
		if(this.props.error) {
			return (
				<Text style={styles.errorMessage}>{this.props.error}</Text>
			);
		}
	}

	renderButtons() {
		if(this.props.loading) {
			return ( <Spinner /> );
		} else {
			return (
				<View>
					<Button onPress={this.onLoginPress.bind(this)}>
						Entrar
					</Button>

					<Button onPress={this.onRegisterPress.bind(this)}>
						Cadastrar
					</Button>
				</View>
			);
		}
	}

	render() {
		const { email, password, error, changeLoginEmail, changeLoginPassword } = this.props;
		const { headerTextStyle } = styles;

		return (
			<View>
				<Text style={headerTextStyle}>Formulário de Login</Text>
				<InputText 
					label='E-mail:' 
					value={email} 
					onChangeText={ (text) => changeLoginEmail(text) } 
				/>

				<InputText 
					label='Senha:' 
					value={password} 
					onChangeText={ (text) => changeLoginPassword(text) } 
					secureTextEntry={true}
				/>
				
				{ this.renderError() }
				
				{ this.renderButtons() }

			</View>
		);
	}
}

const mapStateToProps = ({ auth }) => {
	const { email, password, error, loading } = auth;

	return { email, password, error, loading };
};

const styles = StyleSheet.create({
	headerTextStyle: {
		fontSize: 20,
		fontWeight: '700',
		alignSelf: 'center',
		margin: 20
	},
	errorMessage: {
		color: 'red',
		fontSize: 14,
		fontWeight: '700',
		margin: 10,
		alignSelf: 'center'

	}
});

export default connect(
	mapStateToProps, 
	{ 
		changeLoginEmail, 
		changeLoginPassword, 
		loginUser,
		registerUser
	}
)(LoginForm);
