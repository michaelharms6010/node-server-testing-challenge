const Quotes = require('./quotes-model');
const db = require("../data/db-config");

describe("Quotes Model Testing", () => {
    beforeEach(async () => {
        await db("quotes").truncate();
    });

    describe("insert", () => {
        const newQuote = {
            quote: "The real problem is not whether machines think, but whether men do.", 
            speaker: "B.F. Skinner"};
        it("should add a new quote", async () => {
            await Quotes.insert(newQuote);

            const quotes = await db("quotes");

            expect(quotes.length).toBe(1);
            expect(quotes[0].speaker).toBe("B.F. Skinner");
        });
        it("Should return the new quote", async () => {
            const quote = await Quotes.insert(newQuote);
      
            expect(quote.id).toEqual(1);
          });
    });

    describe("the remove function", () => {
        const newQuote = {
            quote: "The real problem is not whether machines think, but whether men do.", 
            speaker: "B.F. Skinner"};

        it("should remove a quote by ID", async () => {
            await db("quotes").insert(newQuote);

            await Quotes.remove(1);

            const quotes = await db("quotes").where({id: 1});

            expect(quotes.length).toBe(0);


        });
   

    })



});