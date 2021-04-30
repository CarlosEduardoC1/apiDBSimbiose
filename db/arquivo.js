
exports.insert = `INSERT INTO arquivo (cpf, email, endereco, fone, name, dia, especialidade,hora, categoria, medico, preco) VALUES (?,?,?,?,?,?,?,?,?,?,?)`;

exports.select = `SELECT * FROM arquivo`;

exports.delete = `DELETE FROM arquivo WHERE id = ?`;

