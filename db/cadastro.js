
exports.insert = `INSERT INTO cadastro (categoria, especialidade, medico, particular, simbiose, atestado, bompastor,hora) VALUES (?,?,?,?,?,?,?,json(?))`;

exports.select = `SELECT * FROM cadastro`;

exports.where = `SELECT * FROM cadastro WHERE categoria = ?`;

exports.update = `UPDATE cadastro set categoria = COALESCE(?,categoria), especialidade= COALESCE(?,especialidade), medico= COALESCE(?,medico), particular= COALESCE(?,particular)
, simbiose= COALESCE(?,simbiose), atestado= COALESCE(?,atestado), bompastor= COALESCE(?,bompastor), hora= COALESCE(?,hora) WHERE id = ?`;

exports.delete = `DELETE FROM cadastro WHERE id = ?`;

