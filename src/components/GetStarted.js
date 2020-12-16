import React from 'react';
import { setUp } from './UserFunctions';

const GetStarted = (props) => {

    const settingUp = id => {
        setUp(id);
        //await then add new userWorkout
    }

    return (
        <div>
            <p>gotta start in the morning with pushups, do your pulls later in the day</p>
            <button onClick={settingUp(props.authId)}>
                Get Started!
            </button>
        </div>
    )
}

export default GetStarted;
