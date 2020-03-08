const Quotes = require('../quotes/quotes-model');
const express = require("express");

const router = express.Router();

var Pusher = require('pusher');

var pusher = new Pusher({
  appId: '960219',
  key: process.env.PUSHER_KEY,
  secret: process.env.PUSHER_SECRET,
  cluster: 'us2',
  encrypted: true
});



router.get('/', (req, res) => {
    Quotes.getAll()
    .then(quotes => {
        res.status(200).json(quotes)
    })
    .catch(err => {
        res.status(500).json(err)
    })
});

router.get('/:id', (req, res) => {
    Quotes.findById(req.params.id)
    .then(quote => {
        res.status(200).json(quote)
    })
    .catch(err => {
        res.status(500).json(err)
    })
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
  
    Quotes.findById(id)
    .then(scheme => {
      if (scheme) {
        Quotes.update(changes, id)
        .then(updatedQuote => {
            pusher.trigger('quotes', 'new-quote-data', {
                "message": "hello world"
            });
            res.json(updatedQuote);
        });
      } else {
        res.status(404).json({ message: 'Could not find quote with given id' });
      }
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to update scheme' });
    });
  });
  




router.post('/', (req, res) => {
    Quotes.insert(req.body)
    .then(quote => {
        pusher.trigger('quotes', 'new-quote-data', {
            "message": "hello world"
          });
        res.status(200).json(quote)
    })
    .catch(err => {
        res.status(500).json(err)
    })
}) 

router.delete('/:id', (req, res) => {
    Quotes.remove(req.params.id)
    .then(quote => {
        res.status(200).json(quote)
    })
    .catch(err => {
        res.status(500).json(err)
    }) 
})





module.exports = router;