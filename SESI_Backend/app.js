//Importar bibliotecas
const express = require('express')
var bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const fs = require('fs')

//Carregando módulos
const gestor = require('./routes/gestorRoutes')
const medico = require('./routes/medicoRoutes')
const atleta = require('./routes/atletaRoutes')

//Chama a o express criando uma nova aplicação dentro da variavel app
const app = express()


app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//Rotas
app.use(express.static(path.join(__dirname, 'download')))
app.use('/', gestor)
app.use('/medico', medico)
app.use('/atleta', atleta)

//Inicializa Servidor
const port = 3000
app.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`)
})
