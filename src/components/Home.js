import React from 'react';
// import { useAuth0 } from '@auth0/auth0-react';
import LoginBtn from './LoginBtn';
import LogoutBtn from './LogoutBtn';
import Profile from './Profile';

const Home = () => {
    // const { user, isAuthenticated } = useAuth0();

    return (
        <>
            <LoginBtn />
            <LogoutBtn />
            <Profile />
        </>
    )
}

export default Home;
