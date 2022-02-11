/**
 * Created by Administrator on 2020-03-24.
 */
var express = require('express')
var bodyParser = require('body-parser')

const localPort = 3000
var app = express()

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: true })

app.post('/login.do', urlencodedParser, (req, res) => {
  console.log('********************')
  console.log(req.body)

  res.end()
})

app.listen(localPort, () => {
  console.log('http://127.0.0.1:%s', localPort)
})
