const express = require('express');
const sqlite = require('sqlite3').verbose();
var cors = require('cors');
const query = require("./db");
const app = express();

const cadastro = require("./routes/cadastro");
const arquivo = require("./routes/arquivo");
const agendamentos = require("./routes/agendamentos");


app.use(cors());
app.options('*', cors());
app.use(express.json());

app.use('/cadastro', cadastro);
app.use('/arquivo', arquivo);
app.use('/agendamentos', agendamentos);

app.listen(process.env.PORT || 3080, function () {
    var db = new sqlite.Database('simbiose.S3DB', (err) => {
        if (err) console.log(err);
        else {
            db.run(query.createTableCadastro, (err) => { if (err) console.log(err); else console.log("Tabela Cadastro criada com sucesso") });
            db.run(query.createTableArquivo, (err) => { if (err) console.log(err); else console.log("Tabela Arquivo criada com sucesso") });
            db.run(query.createTableAgendamentos, (err) => { if (err) console.log(err); else console.log("Tabela Agendamentos criada com sucesso") });
            // db.run(query.createTableUser, (err) => { if (err) console.log(err); else console.log("Tabela Users criada com sucesso") });
        }
    });

    console.log("O servidor está de pé na porta %d!", this.address().port, app.settings.env);
})