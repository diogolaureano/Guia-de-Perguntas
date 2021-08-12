const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const Pergunta = require("./database/Pergunta");

//Informando que o EJS será usado nas Views
app.set('view engine', 'ejs');
// Linha para configurar arquivos estaticos
app.use(express.static('public'));
//Informa o uso do bodyParser e encriptografa os dados
app.use(bodyParser.urlencoded({ extended: false }));
//Habilita para trabalhar com APIs
app.use(bodyParser.json());
//Criando variavel de conexao
const connection = require("./database/database");

//Database
connection
    .authenticate()
    .then(() => {
        console.log("Conexão realizada pelo banco de dados");
    })
    .catch((msgErro) => {
        console.log(msgErro);
    })


// ===================== ROTAS ====================

app.get("/", (req, res) => {
    //Select * from
    Pergunta.findAll({
        raw: true,
        order: [
            ['id', 'DESC']
        ]
    }).then(pergunta => {
        res.render("index", {
            pergunta: pergunta
        });
    });

});

app.get("/perguntar", (req, res) => {
    res.render("perguntar");
});

app.post("/salvarpergunta", (req, res) => {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;

    //Insert into
    Pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        res.redirect("/");
    });

});

app.listen(8080, () => { console.log("App rodando!") });