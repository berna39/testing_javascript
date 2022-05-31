import axios from 'axios'

class User{
    static all(){
        axios.get('to-some-api/users').then(resp => resp.data);
    }
}

module.exports = User;