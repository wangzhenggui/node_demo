const express = require('express');

const router = express.Router()

router.get('/', (req, res) => {
  res.send('get 请求')
})

router.post('/', (req, res) => {
  res.send('post 请求')
})


module.exports = router;