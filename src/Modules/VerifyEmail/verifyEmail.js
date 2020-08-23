import React, { Component } from 'react';
import axios from 'axios';
import './verifyEmail.css';

class VerifyEmail extends Component {
	async componentDidMount() {
		//get the query string
		const queryString = window.location.search;
		// console.log('Query string : ', queryString);

		//parse the query
		const urlParams = new URLSearchParams(queryString);

		let token = urlParams.get('token');
		console.log(`Token : ${token}`);
		let email = urlParams.get('email');
		console.log(`Email : ${email}`);

		try {
			let url = 'http://localhost:3001/is_email_verify';

			await axios.post(url, {
				token,
				email,
			});
		} catch (error) {
			console.log('Inside error');
			// window.location='/login'
			this.props.history.push('/login');
		}
	}

	render() {
		return (
			<div className="col m-4 justify-content-center center-container">
				<h3 className="text-center">WELCOME TO NABULA</h3>
				<p className="text-center m-4 title">Your email verified</p>

				<div className="mx-auto d-flex">
					<button className="btn login-btn">Login</button>
				</div>
			</div>
		);
	}
}

export default VerifyEmail;
