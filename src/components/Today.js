import React, {Component} from 'react';
import jwt_decode from 'jwt-decode';
import { hasStarted } from './UserFunctions';
import GetStarted from './GetStarted';

class Today extends Component {
    constructor() {
        super();
        this.state = {
            hasStarted: 0,
            authId: ''
        }
    }

    content = {}
    componentDidMount() {
        const token = localStorage.usertoken;
        const decoded = jwt_decode(token);
        console.log(decoded);
        // hasStarted()
        this.setState({
            hasStarted: decoded.hasStarted,
            authId: decoded.authId
        });
    }

    // either show 'Get Started' button or whichever workout is nxt in their flow
    render() {
        if (this.state.hasStarted) {
            this.content = <div>Showing True</div>
        } else (this.content = <GetStarted  authId={this.state.authId}/>)
        return (
            <div>{this.content}</div>
        )
    }
}

export default Today;
