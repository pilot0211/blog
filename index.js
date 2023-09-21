const express = require('express')
const app = express()
const port = 3000

app.get('/trang-chu', (req, res) => {
  res.send('Hello mup')
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)})