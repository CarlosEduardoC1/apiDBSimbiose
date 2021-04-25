
const sqlite = require('sqlite3').verbose();
var db = new sqlite.Database('simbiose.S3DB');

const insert = `INSERT INTO cadastro (categoria) VALUES ($categoria)`;
const select = `SELECT * FROM cadastro`;

exports.save = async (req, res, next) => {
    db.run(insert, req.body.categoria, (err) => {
        if (err) { res.status(400).json({ msg: "Não foi possível cadastrar", status: 400 }) }
        else { res.status(200).json({ msg: "Cadastrado com sucesso!", status: 200 }); }
    });
}

exports.get = async (req, res, next) => {
    db.all(select, (err, rows) => {
        if (err) { res.status(400).json({ msg: "Não foi possível buscar dados", status: 400 }) }
        else { 
            console.log(rows);
            res.status(200).json({ rows, msg: "sera" }); }
    });
}