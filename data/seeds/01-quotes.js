exports.seed = function(knex) {
    return knex('quotes').insert([
        {quote: 'A designer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away.', speaker: "Antoine de Saint-Exupry" },
        {quote: 'You would make a ship sail against the winds and currents by lighting a bon-fire under her deck? I have no time for such nonsense.', speaker: "Napoleon, on Robert Fulton's Steamship"},
        {quote: `Never trust a computer you can't throw out a window.`, speaker: 'Steve Wozniak'},
        {quote: 'We do not inherit the earth from our ancestors, we borrow it from our children.', speaker: "Native American Song" },
        {quote: 'You are, by your epiphany, a veritable god from the machine.', speaker: "Menander (c. 300 B.C.)" },
        {quote: 'Do not throw the arrow which will return against you.', speaker: "Kurdish Proverb" },
        {quote: 'If you chase two rabbits, you will lose them both.', speaker: "Native American Saying" },
        {quote: 'It is from their foes, not their friends, that cities learn the lesson of building high walls.', speaker: "Aristophanes" },
        {quote: 'The man who moves a mountain begins by carrying away small stones.', speaker: "Confucius" },
        {quote: "You can't direct the wind, but you can adjust your sails.", speaker: "Unknown" },
        {quote: 'Words have the power to both destroy and heal. When words are both true and kind, they can change our world.', speaker: "The Buddha" },
        {quote: 'Everything is worth what its purchaser will pay for it.', speaker: "Publius Syrus" }
        
    ])
}