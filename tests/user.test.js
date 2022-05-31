const allUsers = require('../features/user');
const axios = require('axios');

jest.mock('axios');

describe('Mock Testing Api calls with axios', () => {
    test ('Mock Axios test call', ()=> {
        const users = [{name: 'Tboy'}, {name: 'Hitachi'}];
        const resp = {data: users};
        axios.get.mockResolvedValue(resp);

        return allUsers().then(data => expect(data).toEqual(users));
    });
});