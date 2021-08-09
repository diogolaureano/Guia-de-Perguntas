const express = require("express");
const app = express();

//Informando que o EJS será usado nas Views
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    var nome = "Diogo";
    var lang = "Java";
    var exibeMSG = false;

    //res.send("Bem vindo ao meu site!");
    res.render("index", {
        nome: nome,
        lang: lang,
        empresa: "Salve",
        inscritos: 8000,
        msg: exibeMSG
    });
});

app.listen(8080, () => { console.log("App rodando!") })