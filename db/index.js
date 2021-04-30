exports.createTableCadastro = `CREATE TABLE IF NOT EXISTS 'cadastro' ('id' INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL
, 'categoria' TEXT NOT NULL, 'especialidade' TEXT NOT NULL, 'medico' TEXT NOT NULL, 'particular' TEXT NOT NULL, 'simbiose' TEXT NOT NULL
, 'atestado' TEXT NOT NULL, 'bompastor' TEXT NOT NULL, 'hora' JSON NOT NULL )`;

exports.createTableArquivo = `CREATE TABLE IF NOT EXISTS 'arquivo' ('id' INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL
, 'cpf' TEXT NOT NULL, 'email' TEXT NOT NULL, 'endereco' TEXT NOT NULL, 'fone' TEXT NOT NULL, 'name' TEXT NOT NULL, 'dia' TEXT NOT NULL
, 'especialidade' TEXT NOT NULL, 'hora' TEXT NOT NULL, 'categoria' TEXT NOT NULL, 'medico' TEXT NOT NULL, 'preco' TEXT NOT NULL)`;

exports.createTableAgendamentos = `CREATE TABLE IF NOT EXISTS 'agendamentos' ('id' INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL
, 'cpf' TEXT NOT NULL, 'email' TEXT NOT NULL, 'endereco' TEXT NOT NULL, 'fone' TEXT NOT NULL, 'name' TEXT NOT NULL, 'dia' TEXT NOT NULL
, 'especialidade' TEXT NOT NULL, 'hora' TEXT NOT NULL, 'categoria' TEXT NOT NULL, 'medico' TEXT NOT NULL, 'preco' TEXT NOT NULL)`;