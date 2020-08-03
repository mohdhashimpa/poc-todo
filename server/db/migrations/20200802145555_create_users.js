
exports.up = function (knex) {
    return knex.schema.createTable('users', t => {
        t.increments('id').primary()
        t.string('name', 100).notNullable()
        t.string('email', 100).unique().notNullable()
        t.string('password', 255).notNullable()
        t.timestamps(true, true)
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('users')
};
