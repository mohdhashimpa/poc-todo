const db = require('../db');

const User = db.Model.extend({
    tableName: 'users',

})

module.exports = User;