import React, { Component } from 'react';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import './ResetPassword.css';

import animationData from '../../Images/lotties/forgot_password.json';

export default function ResetPassword() {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	};

	return (
		<div className="row mx-auto d-flex">
			<div className="col-sm-6">
				<Lottie options={defaultOptions} height={400} width={400} />
			</div>
			<div className="col-sm-4 mt-5">
				<div className="card ">
					<div className="card-body">
						<p className="text-center title">Reset Password</p>
						<p className="text-center sub-title">
							Enter your user account's verified email address and we will send you a password reset link.
						</p>
						<form>
							<div className="form-group">
								<input type="email" className="form-control" placeholder="Enter your email address" />
							</div>
							<div className="mx-auto d-flex">
								<button className="reset-password">
									<Link to="/change_password">Send email</Link>
								</button>
							</div>
							<div className=" mt-2">
								<Link to="/login" className="back-to-login">
									Back to login
								</Link>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
