const express = require('express');
const router = express.Router();

let messages = [
  {
    id: 0,
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
]

router.get('/', (req, res, next) => {
  res.render('index', { messages } )
})

router.delete('/:idx', (req, res) => {
  const date = req.params.idx
  messages = messages.filter(x => x.added !== date)
  console.log(messages)
  res.redirect('/')
})

router.get('/new', (req, res, next) => {
  res.render('new')
})

router.post('/new', (req, res) => {
  const user = req.body.user
  const text = req.body.text
  const id = messages[messages.length - 1].id + 1
  messages.push({ text, user, added: new Date(), id})
  console.log(messages)
  res.redirect('/')
})

module.exports = router
