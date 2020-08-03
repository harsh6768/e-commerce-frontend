import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './Login.css';

// import LoginImage from '../../Images/login.svg';
// import LoginImage from '../../Images/login1.svg';
import LoginImage from '../../Images/login2.svg';
import {GoogleOutlined} from '@ant-design/icons';

class Login extends Component {
	render() {
		return (
			<div>
				<div className="login-page-container card  mx-auto d-flex  mt-5">
					<div className="row card-body">
						<div className="col-md-6">
							<img src={LoginImage}  alt="SVG" className='img-fluid ' />
						</div>
						<div className="col-md-6 mx-auto">
							<p className='title'>Welcome to Nabula</p>						
							<div className='form-group'>
							<input  className='form-control'  type="email" placeholder="Enter email" />
							</div>
							<div className='form-group'>
								<input  className='form-control' type="password" placeholder="Enter password" />
							</div>
							<p className='forgot-password text-right'><Link to='/forget_password'>forgot password ?</Link></p>
							<div className='mx-auto d-flex'>
								<button className=" login-btn">Login</button>
							</div>
							<div className='mx-auto d-flex mt-3'>
								<span className='create-account'>New Nabula ?</span>
								<span className='create-account text-primary'><Link to='/register' >&nbsp;Create Account</Link></span>
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
