const express = require('express');
const sqlite = require('sqlite3').verbose();
var cors = require('cors');
const createCadastro = require("./db/query");
const app = express();

const cadastro = require("./routes/cadastro");


app.use(cors());
app.options('*', cors());
app.use(express.json());

app.use('/cadastro', cadastro);

app.listen(process.env.PORT || 3000, function () {
    var db = new sqlite.Database('simbiose.S3DB', (err) => {
        if (err) console.log(err);
        else {
            db.run(createCadastro, (err) => { console.log(err); })
        }
    });

    console.log("O servidor está de pé na porta %d!", this.address().port, app.settings.env);
})