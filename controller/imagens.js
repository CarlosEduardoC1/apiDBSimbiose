
const sqlite = require('sqlite3').verbose();
var db = new sqlite.Database('simbiose.S3DB');
const query = require('../db/imagens.json');
const fs = require('fs');


exports.save = async (req, res, next) => {
    if (query.image1[0].img == "") {
        query.image1[0].img = req.body.base64
        try {
            fs.writeFileSync('./db/imagens.json', JSON.stringify(query, null, 4))
            res.status(200).json({ msg: "Imagem cadastrada com sucesso", status: 200 });
        }
        catch (error) {
            res.status(400).json({ msg: "Erro ao cadastrar imagem", status: 400 });

        }
    }
    else
        if (query.image2[0].img == "") {
            query.image2[0].img = req.body.base64
            try {
                fs.writeFileSync('./db/imagens.json', JSON.stringify(query, null, 4))
                res.status(200).json({ msg: "Imagem cadastrada com sucesso", status: 200 });
            }
            catch (error) {
                res.status(400).json({ msg: "Erro ao cadastrar imagem", status: 400 });

            }
        }
        else
            if (query.image3[0].img == "") {
                query.image3[0].img = req.body.base64
                try {
                    fs.writeFileSync('./db/imagens.json', JSON.stringify(query, null, 4))
                    res.status(200).json({ msg: "Imagem cadastrada com sucesso", status: 200 });
                }
                catch (error) {
                    res.status(400).json({ msg: "Erro ao cadastrar imagem", status: 400 });

                }
            }
            else {
                res.status(400).json({ msg: "Você já chegou no limite de imagens", status: 400 });
            }
}

exports.get = async (req, res, next) => {
    const retorno = {
        img: [
            { img: query.image1[0].img, id: query.image1[0].id },
            { img: query.image2[0].img, id: query.image2[0].id },
            { img: query.image3[0].img, id: query.image3[0].id },
        ]
    }
    res.status(200).json(retorno);
}

exports.delete = async (req, res, next) => {
    if (req.params.id == 1 && query.image1[0].img != "") {
        query.image1[0].img = ""
        try {
            fs.writeFileSync('./db/imagens.json', JSON.stringify(query, null, 4))
            res.status(200).json({ msg: "Imagem deletada com sucesso", status: 200 });
        }
        catch (error) {
            res.status(400).json({ msg: "Erro ao deletar imagem", status: 400 });

        }
    }
    else
        if (req.params.id == 2 && query.image2[0].img != "") {
            query.image2[0].img = ""
            try {
                fs.writeFileSync('./db/imagens.json', JSON.stringify(query, null, 4))
                res.status(200).json({ msg: "Imagem deletada com sucesso", status: 200 });
            }
            catch (error) {
                res.status(400).json({ msg: "Erro ao deletar imagem", status: 400 });

            }
        }
        else if (req.params.id == 3 && query.image3[0].img != "") {
            query.image3[0].img = ""
            try {
                fs.writeFileSync('./db/imagens.json', JSON.stringify(query, null, 4))
                res.status(200).json({ msg: "Imagem deletada com sucesso", status: 200 });
            }
            catch (error) {
                res.status(400).json({ msg: "Erro ao deletar imagem", status: 400 });

            }
        }
        else {
            res.status(400).json({ msg: "Erro ao deletar imagem", status: 400 });
        }
}