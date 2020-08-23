import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

// import LoginImage from '../../Images/login.svg';
// import LoginImage from '../../Images/login1.svg';
import LoginImage from '../../Images/login2.svg';
import { GoogleOutlined } from '@ant-design/icons';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
		};
	}
	onHandleChange = (e) => {
		const { name, value } = e.target;
		console.log(`Name : ${name} >>>> Value : ${value}`);
		this.setState({
			[name]: value,
		});
	};

	onFormSubmit = async (e) => {
		e.preventDefault();
		try {
			const { email, password } = this.state;
			console.log(`Email: ${email} >>>> Password : ${password}`);

			let url = 'http://localhost:3001/login';
			let response = await axios.post(url, {
				email,
				password,
			});

			console.log('Login Successful!');
			console.log(response.data);
			let { token, message } = response.data;

			localStorage.setItem('token', token);

			//pushing the routes
			this.props.history.push({
				pathname: '/',
			});

		} catch (error) {
			console.log(`Error : ${error}`);
		}
	};
	render() {
		let { email, password } = this.state;
		return (
			<div>
				<div className="login-page-container card  mx-auto d-flex  mt-5">
					<div className="row card-body">
						<div className="col-md-6">
							<img src={LoginImage} alt="SVG" className="img-fluid " />
						</div>
						<div className="col-md-6 mx-auto">
							<p className="title">Welcome to Nabula</p>
							<form method="POST" onSubmit={this.onFormSubmit}>
								<div className="form-group">
									<input
										className="form-control"
										type="email"
										name="email"
										value={email}
										placeholder="Enter email"
										onChange={this.onHandleChange}
									/>
								</div>
								<div className="form-group">
									<input
										className="form-control"
										type="password"
										name="password"
										value={password}
										placeholder="Enter password"
										onChange={this.onHandleChange}
									/>
								</div>
								<p className="forgot-password text-right">
									<Link to="/forget_password">forgot password ?</Link>
								</p>
								<div className="mx-auto d-flex">
									<button type="submit" className=" login-btn">
										Login
									</button>
								</div>
							</form>
							<div className="mx-auto d-flex mt-3">
								<span className="create-account">New Nabula ?</span>
								<span className="create-account text-primary">
									<Link to="/register">&nbsp;Create Account</Link>
								</span>
							</div>
							{/* <p className='text-center social-login '>Social Login</p>
							<GoogleOutlined  style={{ fontSize: '16px', color:"blue"}} /> */}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Login;
