import React, {Component} from 'react';
import jwt_decode from 'jwt-decode';

class Today extends Component {
    constructor() {
        super();
        this.state = {}
    }

    componentDidMount() {
        const token = localStorage.usertoken;
        const decoded = jwt_decode(token);
        console.log(decoded);
        //look for a table with authId=

        // this.setState({
        //     hasStarted: decoded.hasStarted
        // });
    }

    // either show 'Get Started' button or whichever workout is nxt in their flow
    render() {
        return (
            <div>HEllo
            </div>
        )
    }
}

export default Today;
