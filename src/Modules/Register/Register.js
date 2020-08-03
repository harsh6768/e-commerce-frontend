import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Register.css';

import RegisterImage from '../../Images/register.svg';

class Register extends Component {
	render() {
		return (
			<div className="card  mx-auto d-flex register-page-container mt-5">
				<div className="row card-body">
					<div className="col-sm-6">
						<p className="text-center title">Create New Account</p>
						<form>
							<div className="form-group">
								<input type="text" className="form-control" placeholder="Enter username" />
							</div>
							<div className="form-group">
								<input type="email" className="form-control" placeholder="Enter your email" />
							</div>
							<div className="form-group">
								<input type="password" className="form-control" placeholder="Enter password" />
							</div>
							<div className="mx-auto d-flex">
								<button className="register-btn">
									<Link to="check_email">Register</Link>
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
