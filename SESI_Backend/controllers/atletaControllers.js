// Importar módulos
const database = require('../config/dbConfig'); // "database" é uma variável que vai receber as configurações do "dbConfig"
const atletaModels = require('../models/atletaModels'); // "atletaModels" é uma variável que vai receber o model "atletaModels"
const examesModels = require("../models/exameModels")
const fs = require('fs')
const path = require('path')
const bcrypt = require('bcrypt'); // Variável que vai pegar a criptografia

// Criando class "atletaControllers" para fazer o CRUD
class atletaControllers{

    // -------------------------- LISTAR DADOS DO USUÁRIO --------------------------
    static async listUsers(req, res){
        await database.sync();
        let dados = await atletaModels.findAll({raw : true});
        res.status(200).json(dados);
    };

    // -------------------------- ALTERAR USUÁRIO --------------------------
    static async changeUser(req, res){
        let cpf = req.body.cpf; // Variável que vai armazenar o CPF

        // Criar a senha
        const salt = await bcrypt.genSalt(12); // Vai dificultar sua senha
        const passwordHash = await bcrypt.hash(req.body.senha.toString(), salt); // Vai receber a senha do usuário e vai adicionar o "Salt"

        req.body.senha = passwordHash; // vai passar a senah criptografada

        let dadoAtualizado = req.body; // Variável que vai receber os dados novos 

        await database.sync(); 
        await atletaModels.update(dadoAtualizado, {where: {cpf: cpf}}); // Query de alteração
        res.status(200).send("Dados Atualizado!!"); // Resposta final
    };

    static async verExamesSolicitados(req, res){
        let id_atleta = req.params.id_atleta
        await database.sync()
        let request = await examesModels.findAll({
            raw : true,
            where:{
                id_exame_atl : id_atleta
            }
        })
        res.status(200).json({request})
    }
    static async enviarPdf(req, res){
        let id_atleta = req.params.id_atleta
        let pdf = fs.readFileSync(path.join(__dirname, '../uploads/' + req.file.filename))
        await database.sync()
        await examesModels.update({
            pdf : pdf
        }, {where:{id_exame_atl:id_atleta}})
        res.status(200).json({msg:"Exame enviado com sucesso"})
        fs.unlinkSync(path.join(__dirname, '../uploads/' + req.file.filename))
    }
}

// Exportar módulos 
module.exports = atletaControllers;
