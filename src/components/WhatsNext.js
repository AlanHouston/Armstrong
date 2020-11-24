import React, { Component } from 'react';


class WhatsNext extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasStarted: 0,
            authId: ''
        }
    }

    render () {
        return (
            <div>
                <p>here's what's next or whatever</p>
            </div>
        )
    }
}
export default WhatsNext;
