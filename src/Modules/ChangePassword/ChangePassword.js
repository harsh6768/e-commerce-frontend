import React, { Component } from 'react';

import './ChangePassword.css';

class ChangePassword extends Component {
	render() {
		return (
			<div className="card change-page-container mx-auto d-flex mt-5">
				<div className="card-body">
					<p className='title'>Change Password</p>
					<form>
						<div className="form-group">
							<input type="password" className="form-control" placeholder="Enter new password" />
						</div>
						<div className="form-group">
							<input type="password" className="form-control" placeholder="Confirm  password" />
						</div>
						<div className='mx-auto d-flex'>
							<button className="change-btn">Change Password</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default ChangePassword;
