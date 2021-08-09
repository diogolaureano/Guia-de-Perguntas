const express = require("express");
const app = express();

//Informando que o EJS será usado nas Views
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    var nome = "Diogo";
    var lang = "Java";
    var exibeMSG = false;

    var produtos = [
        { nome: "Doritos", preco: 3.14 },
        { nome: "Chips", preco: 5.00 },
        { nome: "Leite", preco: 3.99 }
    ];

    //res.send("Bem vindo ao meu site!");
    res.render("index", {
        nome: nome,
        lang: lang,
        empresa: "Salve",
        inscritos: 8000,
        msg: exibeMSG,
        produtos: produtos
    });
});

app.listen(8080, () => { console.log("App rodando!") });