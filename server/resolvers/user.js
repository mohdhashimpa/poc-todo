const controller = require('../controllers/user');

module.exports = {
    Query: {
        me: () => { return controller.me() }
    },
    Mutation: {
        signup: async (_, user) => { return await controller.signup(user) },
        login: async (_, credentials) => {
            console.log('credentials : ', credentials);
            return await controller.login(credentials);
        },
    }
}