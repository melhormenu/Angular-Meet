express = require 'express'

app = express()

app.get '/karakuteco/:parametro', (request, response)->
  response.send 'Meu ' + request.params.parametro

app.listen 3000, ->
  console.log 'Started server'
