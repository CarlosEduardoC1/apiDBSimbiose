
exports.insert = `INSERT INTO agendamentos (cpf, email, endereco, fone, name, dia, especialidade,hora, categoria, medico, preco) VALUES (?,?,?,?,?,?,?,?,?,?,?)`;

exports.select = `SELECT * FROM agendamentos`;

exports.where = `SELECT * FROM agendamentos where categoria = ? limit 10`;

exports.delete = `DELETE FROM agendamentos WHERE id = ?`;

