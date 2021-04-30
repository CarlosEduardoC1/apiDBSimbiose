
const sqlite = require('sqlite3').verbose();
var db = new sqlite.Database('simbiose.S3DB');
const query = require('../db/cadastro');


exports.save = async (req, res, next) => {
    db.run(query.insert,
        req.body.categoria
        , req.body.especialidade
        , req.body.medico
        , req.body.particular
        , req.body.simbiose
        , req.body.atestado
        , req.body.bompastor
        , req.body.hora
        , (err) => {
            if (err) { res.status(400).json({ msg: "Não foi possível cadastrar", status: 400, erro: err }); console.log(err); }
            else { res.status(200).json({ msg: "Cadastrado com sucesso!", status: 200 }); }
        });
}

exports.get = async (req, res, next) => {
    var params = []
    db.all(query.select, params, (err, rows) => {
        if (err) { res.status(400).json({ msg: "Não foi possível buscar dados", status: 400 }) }
        else {
            console.log(rows);
            res.status(200).json(rows);
        }
    });
}

exports.getWhere = async (req, res, next) => {
    db.all(query.where, req.params.filtro, (err, rows) => {
        if (err) { res.status(400).json({ msg: "Não foi possível buscar dados", status: 400 }) }
        else {
            console.log(rows);
            res.status(200).json({ rows, msg: "sera" });
        }
    });
}

exports.update = async (req, res, next) => {
    db.run(query.update,
        req.body.categoria
        , req.body.especialidade
        , req.body.medico
        , req.body.particular
        , req.body.simbiose
        , req.body.atestado
        , req.body.bompastor
        , req.body.hora
        , req.params.id
        , (err) => {
            if (err) { res.status(400).json({ msg: "Não foi possível atualizar", status: 400, erro: err }); console.log(err); }
            else { res.status(200).json({ msg: "Atualizado com sucesso!", status: 200 }); }
        });
}

exports.delete = async (req, res, next) => {
    db.run(query.delete, req.params.id, (err, result) => {
        if (err) { res.status(400).json({ msg: 'Erro ao deletar.', status: 400 }) }
        else { res.status(200).json({ msg: 'Deletado com sucesso!', result: result }) }
    })
}