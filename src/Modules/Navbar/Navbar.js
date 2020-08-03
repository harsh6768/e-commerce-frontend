import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <React.Fragment>
             <div>
                 <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <a href="#news">News</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                    <li style={{float:"right"}}>
                        <Link to='/login'>Login</Link>
                    </li>
                 </ul>
             </div>
            </React.Fragment>
        )
    }
}
export default  Navbar;