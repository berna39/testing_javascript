const axios = require('axios');

function  allUsers(){
    return axios.get('/users.json').then(resp => resp.data);
}

module.exports = allUsers;