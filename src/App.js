import React from 'react';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Modules/Home/Home';
import Login from './Modules/Login/Login';
import Register from './Modules/Register/Register';
import ResetPassword from './Modules/ResetPassword/ResetPassword';
import ChangePassword from './Modules/ChangePassword/ChangePassword';
import CheckEmail from './Modules/CheckEmail/CheckEmail';
import Navbar from './Modules/Navbar/Navbar';

// #2DF37A Undraw images color
function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/register" component={Register} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/forget_password" component={ResetPassword} />
				<Route exact path="/change_password" component={ChangePassword} />
				<Route exact path="/check_email" component={CheckEmail} />
			</Switch>
		</Router>
	);
}

export default App;
