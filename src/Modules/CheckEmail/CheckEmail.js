import React, { Component } from 'react';
import './CheckEmail.css';

import Checked from '../../Images/checked.svg';

class CheckEmail extends Component {
	render() {
		return (
			<div className="mx-auto d-flex check-container mt-5">
				<div>
					<img src={Checked} alt="Checked" className="img-fluid checked-img mx-auto d-flex" />
					<h3 className="check-email-title text-center mt-3">Check your email</h3>
					<p className="check-email-desc text-center mt-3">
						We've sent a message to harshchaurasiya6768@gmail.com with a link to activate your account.
					</p>
					<div className="mx-auto d-flex mt-4">
						<button className="resend-btn text-center">Resend Email</button>
					</div>
					<p className="text-center mt-5">Having trouble with your activation link ? </p>
					<div className="mx-auto d-flex mt-4">
						<button className="code-btn text-center">Enter code instead</button>
					</div>
				</div>
			</div>
		);
	}
}

export default CheckEmail;
