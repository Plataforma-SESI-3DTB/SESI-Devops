// Importar módulos
const bcrypt = require('bcrypt'); // Variável que vai pegar a criptografia
const database = require('../config/dbConfig'); // Variável que vai receber as configurações do "dbConfig"

// Módulo Gestor Admin
const gestorAdminModels = require('../models/gestorAdminModels'); // Variável que vai receber o model "gestorAdminModels"

// Módulo Gestor Padrão
const gestorModels = require('../models/gestorModels'); // Variável que vai receber o model "gestorModels"

// Módulo Atleta
const atletaModels = require('../models/atletaModels'); // Variável que vai receber o model "atletaModels"
const enderecoAtletaModels = require("../models/enderecoAtletaModels"); // Variável que vai receber o model: "enderecoAtletaModels"
const telAtletaModels = require("../models/telAtletaModels"); // Variável que vai receber o model: "telAtletaModels"

// Módulo Médico
const medicoModels = require('../models/medicoModels'); // Variável que vai armazenar o model: "medicoModels"
const telMedicoModels = require('../models/telMedicoModels'); // Variável que vai armazenar o model: "telMedicoModels"
const enderecoMedicoModels = require('../models/enderecoMedicoModels'); // Variável que vai armazenar o model: "enderecoMedicoModels"
const examesModels = require('../models/exameModels');


// Criando class "gestorControllers" para fazer o CRUD
class gestorControllers {

    // -------------------------- LISTAR USUÁRIO --------------------------
    static async listData(req, res) {

        let arrayData = []; // Array que vai armazenar os dados 
        await database.sync();
        let data = await atletaModels.findAll({ where: { solicitacao: "solicitado" } }); // Filtro do banco de dados
        data.forEach((data) => {
            arrayData.push(data.nome, data.cpf, data.solicitacao) // Envia os dados para o array "arrayData"
        });
        res.status(200).json(arrayData); // Envia a resposta com os dados do "arrayData"
    };

    // -------------------------- CRIAR USUÁRIO --------------------------
    static async createUser(req, res) {

        let verification = true; // Vai verificar se o programa pode dar continuidade

        Object.keys(req.body).forEach(function eachKey(key) {
            // Validação de todos os campos 
            if (!req.body[key] || typeof req.body[key] == undefined || req.body[key] == null) {
                verification = false // Vai atribuir o valor "false" para a variável
            };
        });

        if (verification == false) { // Se a verificação for falsa
            return res.status(422).json({ msg: 'Preencha todos os campos!!' }); //  422 - O servidor entende a requisição mas os dados não estão corretos para processar
        }
        else { // Caso ela seja verdadeira

            const { cpf } = req.body; // Essa const vai facilitar o chamado. Não precisaremos usar o req.body.campo para pegar o valor

            // Validar o campo CPF
            if (!cpf || typeof cpf == undefined || cpf == null || cpf.toString().length != 11 || typeof cpf != 'number') {
                return res.status(422).json({ msg: 'CPF inválido' });
            };

            // -------------------------- ATLETA --------------------------
            if (req.body.cargo == "Atleta") {

                const userExists = await atletaModels.findOne({ where: { cpf: cpf } }); // Realizar a query para verificar se existe um usuário com esse email cadastrado 

                // Verificar se existe o usuário já está cadastrado no banco
                if (userExists) {
                    return res.status(422).json({ msg: 'CPF já cadastrado' }); // Caso já tenha um usuário com esse cpf cadastrado
                }
                else {
                    await database.sync()

                    // Criar a senha
                    const salt = await bcrypt.genSalt(18); // Vai dificultar sua senha
                    const passwordHash = await bcrypt.hash(req.body.senha.toString(), salt); // Vai receber a senha do usuário e vai adicionar o "Salt"
                    req.body.senha = passwordHash; // Passando a senha criptografada
                    try {
                        await atletaModels.create(req.body); // Criar o usuário no banco 
                        await telAtletaModels.create(req.body); // Criar o usuário no banco 
                        await enderecoAtletaModels.create(req.body); // Criar o usuário no banco 
                        res.status(200).json({ msg: 'Atleta cadastrado com sucesso!!' });
                    }
                    catch (err) {
                        res.status(500).json({ msg: 'Erro interno, tente novamente mais tarde!' });
                    }
                }
            }

            // -------------------------- GESTOR --------------------------
            if (req.body.cargo == "gestor") {

                const userExists = await gestorModels.findOne({ where: { cpf: cpf } }); // Realizar a query para verificar se existe um usuário com esse email cadastrado 

                // Verificar se existe o usuário já está cadastrado no banco
                if (userExists) {
                    return res.status(422).json({ msg: 'CPF já cadastrado' }); // Caso já tenha um usuário com esse cpf cadastrado
                }
                else {
                    await database.sync()

                    // Criar a senha
                    const salt = await bcrypt.genSalt(18); // Vai dificultar sua senha
                    /* const passwordHash = await bcrypt.hash(req.body.senha.toString(), salt); // Vai receber a senha do usuário e vai adicionar o "Salt"
                
                    req.body.senha = passwordHash; // Passando a senha criptografada
 */
                    try {
                        console.log("Foi")
                        await gestorModels.create(req.body); // Criar o usuário no banco 
                        res.status(200).json({ msg: 'Usuário cadastrado com sucesso!!' });
                    }
                    catch (err) {
                        console.log("Foi Não")
                        console.log(err)
                    }
                }
            }


            // -------------------------- GESTOR ADMIN --------------------------
            if (req.body.cargo == "gestor-adm") {

                const userExists = await gestorAdminModels.findOne({ where: { cpf: cpf } }); // Realizar a query para verificar se existe um usuário com esse email cadastrado 

                // Verificar se existe o usuário já está cadastrado no banco
                if (userExists) {
                    return res.status(422).json({ msg: 'CPF já cadastrado' }); // Caso já tenha um usuário com esse cpf cadastrado
                }
                else {
                    await database.sync()

                    // Criar a senha
                    const salt = await bcrypt.genSalt(18); // Vai dificultar sua senha
                    const passwordHash = await bcrypt.hash(req.body.senha.toString(), salt); // Vai receber a senha do usuário e vai adicionar o "Salt"

                    req.body.senha = passwordHash; // Passando a senha criptografada

                    try {
                        console.log("Foi")
                        await gestorAdminModels.create(req.body); // Criar o usuário no banco 
                        res.status(200).json({ msg: 'Usuário cadastrado com sucesso!!' });
                    }
                    catch (err) {
                        console.log("Foi Não")
                        console.log(err)
                    }
                }
            }
            if (req.body.cargo == "medico") {
                let userExists = await medicoModels.findOne({ where: { cpf: cpf } })
                if (userExists) {
                    return res.status(422).json({ msg: 'CPF já cadastrado' })
                }
                else {
                    const salt = await bcrypt.genSalt(18);
                    /*                     const passwordHash = await bcrypt.hash(req.body.senha.toString(), salt)
                    
                                        req.body.senha = passwordHash */
                }
                try {
                    await database.sync()
                    await medicoModels.create(req.body)
                    res.status(200).json({ msg: 'Usuario cadastrado com sucesso' })
                }
                catch (err) {
                    res.send(err)
                }
            }
        }
    };

    // -------------------------- ALTERAR USUÁRIO --------------------------
    static async changeUser(req, res) {

        let cpf = req.body.cpf; // Variável que vai armazenar o id

        // Criar a senha
        const salt = await bcrypt.genSalt(12); // Vai dificultar sua senha
        const passwordHash = await bcrypt.hash(req.body.senha.toString(), salt); // Vai receber a senha do usuário e vai adicionar o "Salt"

        req.body.senha = passwordHash; // vai passar a senah criptografada

        let dadoAtualizado = req.body; // Variável que vai receber os dados novos 

        await database.sync();

        // Verifica se o cargo do usuário é Atleta
        if (req.body.cargo == "atleta") {
            try {
                let user = atletaModels.findOne({ where: { cpf: cpf } })
                await atletaModels.update(dadoAtualizado, { where: { cpf: cpf } }); // Altera o atleta no banco de dados
                await enderecoAtletaModels.update(dadoAtualizado, { where: { id_end_atl: user.id } }); // Altera o endereço do atleta no banco de dados
                await telAtletaModels.update(dadoAtualizado, { where: { id_tel_atl: user.id } }); // Altera o telefone do atleta no banco de dados
                res.status(200).send("Atleta Atualizado!"); // Resposta final
            }
            catch (err) {
                res.status(500).send("Houve um erro no servidor interno, tente novamente mais tarde!"); // Resposta final
            }
        }

        // Verifica se o cargo do usuário é Gestor Admin
        if (req.body.cargo == "gestor-adm") {
            try {
                await gestorAdminModels.update(dadoAtualizado, { where: { cpf: cpf } }); // Query de alteração
            }
            catch (err) {
                res.status(500).send("Houve um erro no servidor interno, tente novamente mais tarde!"); // Resposta final
            }
        }

        // Verifica se o cargo do usuário é Gestor
        if (req.body.cargo == "gestor") {
            try {
                await gestorModels.update(dadoAtualizado, { where: { cpf: cpf } }); // Query de alteração
            }
            catch (err) {
                res.status(500).send("Houve um erro no servidor interno, tente novamente mais tarde!"); // Resposta final
            }
        }

        // Verifica se o cargo do usuário é Médico
        if (req.body.cargo == "gestor") {
            try {
                await gestorModels.update(dadoAtualizado, { where: { cpf: cpf } }); // Query de alteração
            }
            catch (err) {
                res.status(500).send("Houve um erro no servidor interno, tente novamente mais tarde!"); // Resposta final
            }
        }
    };


    // -------------------------- DELETAR USUÁRIO --------------------------
    static async deleteUser(req, res) {

        let cpf = req.body.cpf; // Variável que vai receber o cpf inserido pelo usuário
        let cargo = req.body.cargo; // Variável que vai pegar o cargo

        await database.sync();

        if (cargo == "Atleta") {
            // Tentar deletar usuário
            try {
                await atletaModels.destroy({ where: { cpf: cpf } }); // Deletar o atleta do banco de dados
                await enderecoAtletaModels.destroy({ where: { id_end_atl: user.id } }); // Deletar o endereço do atleta cadastrado no banco de dados
                await telAtletaModels.destroy({ where: { id_tel_atl: user.id } }); // Deletar telefone do atleta no banco de dados
                res.status(200).send("Atleta deletado com sucesso!"); // Resposta final
            }
            catch (err) { // Caso não consiga deletar o usuário
                res.send("Erro no servidor, tente novamente mais tarde!"); // Caso não consiga deletar usuário
            }
        }

        if (cargo == "Gestor") {
            // Tentar deletar usuário
            try {
                await gestorModels.destroy({ where: { cpf: cpf } }); // Query para apagar 
                res.status(200).send("Gestor deletado com sucesso!"); // Resposta final
            }
            catch (err) { // Caso não consiga deletar o usuário
                res.send("Erro no servidor, tente novamente mais tarde!"); // Caso não consiga deletar usuário
            }
        }

        if (cargo == "Medico") {
            try {
                await medicoModels.destroy({ where: { id: id } }); // Deletar o médico do banco de dados 
                await telMedicoModels.destroy({ where: { id: id } }); // Deletar telefone do médico no banco de dados
                await enderecoMedicoModels.destroy({ where: { id: id } }); // Deletar o endereço do médico cadastrado no banco de dados
                res.status(200).send("Médico deletado com sucesso!"); // Resposta final
            }
            catch (err) {
                res.send("Erro no servidor, tente novamente mais tarde!"); // Caso não consiga deletar usuário
            }
        }
    };

    static async solicitarAtleta(req, res){
        await database.sync()
        let request = await atletaModels.findOne({where : {cpf : req.body.cpf}})
        try{        
            await atletaModels.update({
            solicitacao : "SOLICITADO"
        }, {
            where:{cpf : req.body.cpf}
        })
        res.status(200).json({msg : "Exame solicitado para o médico"})
    }
    catch(err){
        res.send({msg : "Não foi possível acessar"})
    }
}

};

// Exportar módulos
module.exports = gestorControllers;
