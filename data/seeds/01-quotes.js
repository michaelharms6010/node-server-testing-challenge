exports.seed = function(knex) {
    return knex('quotes').insert([
        {quote: 'You would make a ship sail against the winds and currents by lighting a bon-fire under her deck? I have no time for such nonsense.', speaker: "Napoleon, on Robert Fulton's Steamship"},
        {quote: `Never trust a computer you can't throw out a window.`, speaker: 'Steve Wozniak'},
        {quote: 'We do not inherit the earth from our ancestors, we borrow it from our children.', speaker: "Native American Song" },
        {quote: 'You are, by your epiphany, a veritable god from the machine.', speaker: "Menander (c. 300 B.C.)" }
    ])
}