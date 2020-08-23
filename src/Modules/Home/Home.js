import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Home extends Component {

	constructor(props) {
        super(props);
		this.state = {
			isAuthenticated: false,
		};
	}

	componentWillMount() {
		let token = localStorage.getItem('token');
		if (token != null && token != undefined) {
			this.setState({
				isAuthenticated: true,
			});
		}
	}

	render() {
		const Component = this.props.component;
        const { isAuthenticated } = this.state;
        // Protected Routes
		return isAuthenticated ? <h1>Dashboard Page</h1>  : <Redirect to={{ pathname: '/login' }} />;
	}
}

export default Home;
