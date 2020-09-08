const express = require('express')//importando o express
const app = express()//estanciando
const bodyParser = require('body-parser')//importando body-acesso a todos os dados do formulário


app.use(bodyParser.urlencoded({extended: true}))

app.post('/usuarios', (req, resp) =>{
    console.log(req.body)
    resp.send('<h1>Parabéns. Incluido com sucesso</h1>')
})

app.post('/usuarios/:id', (req, resp) =>{
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1>Parabéns. Alterado com Sucesso</h1>')
})

app.listen(3003)