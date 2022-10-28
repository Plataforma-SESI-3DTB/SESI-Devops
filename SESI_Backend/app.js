//Importar bibliotecas
const express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const passport = require("passport");
const session = require("express-session"); // Dados da sessão do usuário logado que foi salvo

//Carregando módulos
const loginRouter = require('./routes/loginRoutes');
const gestorRouter = require('./routes/gestorRoutes');
const medicoRouter = require('./routes/medicoRoutes');
const medicoConvRouter = require('./routes/medicoConvRoutes');
const atletaRouter = require('./routes/atletaRoutes');

function teste(req, res, next){
    if(req.isAuthenticated()) return next();
    res.send("Nops")
}

//Chama a o express criando uma nova aplicação dentro da variavel app
const app = express()


app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use(session({
    secret: "123", // chave para criptografar os dados do cookie da sessão
    resave: false, //Se a cada requisição tenho que salvar ou não a sessão 
    saveUninitialized: false, // Se devo salvar sessões anônimas
    cookie: { maxAge: 2 * 60 * 1000} , // Quanto tempo queremos que nossa sessão dure
}))

app.use(passport.initialize());
app.use(passport.session());

//Rotas
app.use(express.static(path.join(__dirname, 'download')))
app.use('/', gestorRouter);
app.use('/atleta', atletaRouter);
app.use('/medico', medicoRouter);
app.use('/login', teste, loginRouter);
app.use('/medicoConv', medicoConvRouter);

//Inicializa Servidor
const port = 3000
app.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`)
})
