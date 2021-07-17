
const sqlite = require('sqlite3').verbose();
var db = new sqlite.Database('simbiose.S3DB');
const query = require('../db/user');


exports.save = async (req, res, next) => {
    db.run(query.insert,
        req.body.cpf
        , req.body.email
        , req.body.endereco
        , req.body.fone
        , req.body.name
        , req.body.nomeMae
        , req.body.rg
        , req.body.password
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
    db.run(query.delete, req.params.cpf, (err, result) => {
        if (err) { res.status(400).json({ msg: 'Erro ao deletar.', status: 400 }) }
        else { res.status(200).json({ msg: 'Deletado com sucesso!', result: result }) }
    })
}


exports.verifyMAil = async (req, res, next) => {
    db.all(query.verify, req.body.email, (err, count) => {
        if (err) { res.status(400).json({ msg: 'Erro ao deletar.', status: 400 }) }
        else { res.status(200).json(count[0]); }
    })
}

exports.auth = async (req, res, next) => {
    db.get(query.find, req.body.email, (err, row) => {
        if (err) { res.status(400).json({ msg: "Não foi possível autenticar", status: 400, erro: err });  }
        else if (row) {
            if (req.body.password === row.password) {
                { res.status(200).json({ status: 200, cpf: row.cpf, name: row.name, fone: row.fone, endereco: row.endereco }); }
            }
            else { res.status(400).json({ msg: "erro" }); }

        }
        else { res.status(400).json({ msg: "no row" }); }
    })
}


exports.getId = async (req, res, next) => {
    db.all(query.selectID, req.body.cpf, (err, row) => {
        if (err) { res.status(400).json({ msg: 'Erro ao procurar.', status: 400 }) }
        else { res.status(200).json(row) }
    })
}