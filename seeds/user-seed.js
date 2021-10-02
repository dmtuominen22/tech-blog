const { User } = require('../models');

const userData = [{
        username: 'Denise',
        password: 'password'

    },
    {
        username: 'Gunnar',
        password: 'password'
    },
    {
        username: 'Mike',
        password: 'password'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;