import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

import './Register.css';

import RegisterImage from '../../Images/register.svg';

class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			email: '',
			password: '',
		};
	}

	onHandleChange = (e) => {
		console.log(e.target.value);
		let { name, value } = e.target;

		this.setState({
			[name]: value,
		});
	};
	onFormSubmit = async (e) => {
		e.preventDefault();

		try {
			const { username, email, password } = this.state;
			console.log(`user details : ${username},,, ${email}, ${password}`);
			let url = 'http://localhost:3001/register';

			await axios.post(url, {
				username,
				email,
				password,
			});

			console.log('register successful');
			let sendEmailUrl = 'http://localhost:3001/email_verification';
			await axios.post(sendEmailUrl, {
				email,
			});
			console.log('Email sent');

			this.props.history.push({
				pathname: `/check_email`,
				search: `?email=${email}`,
				state: { email },
			});
			
			// history.push('/check_email');
			// window.location='/check_email'
		} catch (error) {
			console.log('Inside catch block');
		}
	};
	render() {
		let { username, email, password } = this.state;
		return (
			<div className="card  mx-auto d-flex register-page-container mt-5">
				<div className="row card-body">
					<div className="col-sm-6">
						<p className="text-center title">Create New Account</p>
						<form onSubmit={this.onFormSubmit} method="POST">
							<div className="form-group">
								<input
									type="text"
									className="form-control"
									name="username"
									placeholder="Enter username"
									value={username}
									onChange={this.onHandleChange}
								/>
							</div>
							<div className="form-group">
								<input
									type="email"
									className="form-control"
									name="email"
									placeholder="Enter your email"
									value={email}
									onChange={this.onHandleChange}
								/>
							</div>
							<div className="form-group">
								<input
									type="password"
									className="form-control"
									name="password"
									placeholder="Enter password"
									value={password}
									onChange={this.onHandleChange}
								/>
							</div>
							<div className="mx-auto d-flex">
								<button type="submit" className="register-btn">
									Register
								</button>
							</div>
						</form>
						<div className="mt-3">
							<Link to="/login">already have an account ?</Link>
						</div>
					</div>
					<div className="col-sm-6">
						<img src={RegisterImage} alt="SVG" className="img-fluid " />
					</div>
				</div>
			</div>
		);
	}
}
export default Register;
