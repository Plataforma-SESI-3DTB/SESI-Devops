// Importar biblioteca
const Sequelize = require('sequelize'); // Variável que vai importar a bilbioteca sequelize
const bcrypt = require('bcrypt')

// Importar módulos de configuração
const database = require('../config/dbConfig'); // Variável que vai guardar as configurações criadas na pasta "config"
const atletaModels = require('../models/atletaModels')
const gestorAdminModels = require('../models/gestorAdminModels')
const gestorModels = require('../models/gestorModels')
const medicoModels = require('../models/medicoModels')
const medicoConvModels = require('../models/medicoConvModels');
// Importar módulos do banco de dados

const tabela = [atletaModels, gestorAdminModels, gestorAdminModels, gestorModels, medicoModels, medicoConvModels]


// Class criada para Login
class loginControllers{
    static async login(req, res){
        let response = {}
        await database.sync();
        try{
            for(let x = 0; x < tabela.length; x++){
                let request = await tabela[x].findOne({raw : true, where : {email : req.body.email}})
                if(request){
                    response = request
                    break
                }
                if(x === tabela.length - 1){
                    res.status(200).json("O usuário não foi encontrado")
                }
            }
            if(response){
                bcrypt.compare(req.body.senha, response.senha, (err, data) => {
                    if(err) throw err
                    if(data) { 
                        res.status(200).json({msg : "SUCESSO", cargo : response.cargo})
                    }
                    else{
                        res.status(200).json({msg : "SENHA INCORRETA"})
                    }
                })
            }
        }
        catch(err){
            res.status(200).json({ msg : "Erro ao conectar no servidor" })
        }
    };
};

// Exportar módulos
module.exports = loginControllers;
