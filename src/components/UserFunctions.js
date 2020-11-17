import axios from 'axios'

export const checkUser = user => {
    return axios
    .post('http://localhost:3001/users/login', {
        authId: user.sub,
        email: user.email,
        name: user.name,
    })
    .then(res => {
        localStorage.setItem('usertoken', res.data);
        return res.data;
    })
    .catch(err => {
        console.log(err);
    })
}

export const hasStarted = user => {
    return axios
    .post('http://localhost:3001/users/hasStarted', {
        authId: user.authId
    })
    .then(res => {
        return res.data;
    })
    .catch(err => {
        console.log(err);
    })
}

export const setUp = authId => {
    return axios
    .post('http://localhost:3001/users/setUp', {
        authId: authId
    })
    .then(res => {
        return res.data;
    })
    .catch(err => {
        console.log(err);
    })
}
