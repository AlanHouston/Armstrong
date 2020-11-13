import axios from 'axios'

export const checkUser = user => {
    return axios
    .post('http://localhost:3001/users/login', {
        user: user
    })
    .then(res => {
        console.log(res.data);
    })
    .catch(err => {
        console.log(err);
    })
}
