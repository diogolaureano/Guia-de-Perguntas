const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//Informando que o EJS será usado nas Views
app.set('view engine', 'ejs');
// Linha para configurar arquivos estaticos
app.use(express.static('public'));
//Informa o uso do bodyParser e encriptografa os dados
app.use(bodyParser.urlencoded({ extended: false }));
//Habilita para trabalhar com APIs
app.use(bodyParser.json());


// ===================== ROTAS ====================

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/perguntar", (req, res) => {
    res.render("perguntar");
});

app.post("/salvarpergunta", (req, res) => {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    res.send("Recebido titulo: " + titulo + " e descricao:" + descricao);
});

app.listen(8080, () => { console.log("App rodando!") });