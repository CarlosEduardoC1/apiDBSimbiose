
const sqlite = require('sqlite3').verbose();
var db = new sqlite.Database('simbiose.S3DB');
const query = require('../db/arquivo');


exports.save = async (req, res, next) => {
    db.run(query.insert,
        req.body.cpf
        , req.body.email
        , req.body.endereco
        , req.body.fone
        , req.body.name
        , req.body.dia
        , req.body.especialidade
        , req.body.hora
        , req.body.categoria
        , req.body.medico
        , req.body.preco
        , (err) => {
            if (err) { res.status(400).json({ msg: "Não foi possível mover para arquivos", status: 400, erro: err }); }
            else { res.status(200).json({ msg: "Movido para arquivos", status: 200 }); }
        });
}

exports.get = async (req, res, next) => {
    var params = []
    db.all(query.select, params, (err, rows) => {
        if (err) { res.status(400).json({ msg: "Não foi possível buscar arquivos", status: 400 }) }
        else {
            res.status(200).json(rows);
        }
    });
}

exports.delete = async (req, res, next) => {
    db.run(query.delete, req.params.id, (err, result) => {
        if (err) { res.status(400).json({ msg: 'Erro ao deletar.', status: 400 }) }
        else { res.status(200).json({ msg: 'Deletado com sucesso!', result: result }) }
    })
}