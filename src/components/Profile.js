import React, { Component } from 'react';
import { withAuth0, useAuth0 } from '@auth0/auth0-react';
import { checkUser } from './UserFunctions';


class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authId: ''
        }
    }

    // componentDidMount() {
    //     const { user } = this.props.auth0;
    //     console.log(user);
    // }

    checkingUser(x) {
        checkUser(x);
    }

    render() {
        const { user, isAuthenticated } = this.props.auth0;
        return (
            isAuthenticated && (
                <div id='profileOuter'>
                    <img src={user.picture}/>
                    <h1>{user.name}</h1>
                    <p>{user.email}</p>
                    <p>{user.sub}</p>
                    {this.checkingUser(user)}
                </div>
            )
        )
    }
}

export default withAuth0(Profile);









// const Profile = () => {
//     const { user, isAuthenticated } = useAuth0();
//
//     return (
//         isAuthenticated && (
//             <div id='profileOuter'>
//                 <img src={user.picture}/>
//                 <h1>{user.name}</h1>
//                 <p>{user.email}</p>
//                 <p>{user.sub}</p>
//             </div>
//         )
//     )
// }
//
// export default Profile;
