
exports.insert = `INSERT INTO cadastro (categoria, especialidade, medico, particular, simbiose, atestado, bompastor,hora) VALUES (?,?,?,?,?,?,?,json(?))`;

exports.select = `SELECT * FROM cadastro`;

exports.where = `SELECT * FROM cadastro WHERE categoria = ?`;

exports.update = `UPDATE cadastro SET categoria =?, especialidade= ?, medico= ?, particular= ?
, simbiose= ?, atestado= ?, bompastor= ?, hora= json(?) WHERE id = ?`;

exports.delete = `DELETE FROM cadastro WHERE id = ?`;

exports.updHora = `UPDATE cadastro SET hora = json(?) WHERE id = ?`;

