import React from 'react';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';

import { Router, Switch, Route } from 'react-router-dom';
import { history } from './history';

import Home from './Modules/Home/Home';
import Login from './Modules/Login/Login';
import Register from './Modules/Register/Register';
import ResetPassword from './Modules/ResetPassword/ResetPassword';
import ChangePassword from './Modules/ChangePassword/ChangePassword';
import CheckEmail from './Modules/CheckEmail/CheckEmail';
import VerifyEmail from './Modules/VerifyEmail/verifyEmail';
import Navbar from './Modules/Navbar/Navbar';

// #2DF37A Undraw images color
function App() {
	return (
		<Router history={history}>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/register" component={Register} />
				<Route path="/login" component={Login} />
				<Route path="/forget_password" component={ResetPassword} />
				<Route path="/change_password" component={ChangePassword} />
				<Route path="/check_email" component={CheckEmail} />
				<Route path="/check_email_verification" component={VerifyEmail} />
			</Switch>
		</Router>
	);
}

export default App;
