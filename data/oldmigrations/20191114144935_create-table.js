
exports.up = function(knex) {
    return knex.schema.createTable('quotes', tbl => {
        tbl.increments();
        tbl.string('quote', 1020)
            .notNullable()
            .unique();
        tbl.string('speaker')
            .notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('quotes')
};
