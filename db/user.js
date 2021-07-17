
exports.insert = `INSERT INTO users (cpf, email, endereco, fone, name, nomeMae,rg, password) VALUES (?,?,?,?,?,?,?,?)`;

exports.select = `SELECT * FROM users`;

exports.delete = `DELETE FROM users WHERE cpf = ?`;

exports.verify = `Select count(*) AS possui from users where email = ?`;

exports.selectID = `SELECT id FROM users WHERE cpf = ?`;

exports.find = `SELECT email, password, cpf, endereco, fone, name FROM users WHERE email = ?`;