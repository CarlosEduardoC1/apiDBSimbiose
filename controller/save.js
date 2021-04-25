
const sqlite = require('sqlite3').verbose();
var db = new sqlite.Database('simbiose.S3DB');

const insert = `INSERT INTO cadastro (categoria) VALUES ($categoria)`;

exports.save = async (req, res, next) => {
    db.run(insert, req.body.categoria, (err) => {
        if (err) { res.status(400).json({ msg: "Não foi possível cadastrar", status: 400 }) }
        else { res.status(200).json({ msg: "Cadastrado com sucesso!", status: 200 }); }
    });
}