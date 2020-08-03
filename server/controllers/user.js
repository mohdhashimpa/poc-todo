const User = require('../models/User');
var jwt = require('jsonwebtoken');


async function signup(user) {
    let response = await User.forge(user).save();
    response = response.toJSON();
    delete response.password;
    return response;
}

async function login(credentials) {
    try {
        let response = await User.where({
            email: credentials.email,
            password: credentials.password
        }).fetch();
        console.log(response);
        response = response.toJSON();
        delete response.password;
        var token = jwt.sign(response, 'shhhhh');
        return { token };
    } catch (e) {
        console.log(e);
    }

}

module.exports = { signup, login };