
exports.up = function(knex) {
    return knex.schema.table('quotes', function (table) {
        table.boolean('featured').defaultTo(false);
    })
};

exports.down = function(knex) {
    return knex.schema.table('quotes', function (table) {
        table.dropColumn('featured');
    })
};
