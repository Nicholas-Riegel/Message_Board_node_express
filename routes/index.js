var express = require('express');
var router = express.Router();

const messages = [
   {
     text: "Hi there!",
     user: "Amando",
     added: new Date()
   },
   {
     text: "Hello World!",
     user: "Charles",
     added: new Date()
   }
]

router.get('/', function(req, res, next) {
  res.render('index', { messages } )
})

router.get('/new', function (req, res, next) {
  res.render('new')
})

router.post('/new', (req, res) => {
  const user = req.body.user
  const text = req.body.text
  messages.push({ text, user, added: new Date() })
  res.redirect('/')
})

module.exports = router
