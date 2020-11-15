import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import { checkUser } from './UserFunctions';
import Today from './Today';

class Profile extends Component {
    checkingUser = (user) => {
        checkUser(user);
    }

    render () {
        const { user, isAuthenticated } = this.props.auth0;
        return (
            isAuthenticated && (
                <div>
                    <img alt="" src={user.picture}/>
                    <h1>{user.name}</h1>
                    <Today user={user}/>
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
