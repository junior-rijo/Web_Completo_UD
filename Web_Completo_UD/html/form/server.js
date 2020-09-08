const express = require('express')//importando o express
const app = express()//estanciando
const bodyParser = require('body-parser')//importando body-acesso a todos os dados do formulário


app.use(bodyParser.urlencoded({extended: true}))

app.post('/usuarios', (req, resp) =>{
    console.log(req.body)
    resp.send('<h1>Parabéns</h1>')
})

app.listen(3003)