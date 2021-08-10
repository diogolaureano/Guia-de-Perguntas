const express = require("express");
const app = express();

//Informando que o EJS será usado nas Views
app.set('view engine', 'ejs');

// Linha para configurar arquivos estaticos
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.render("index")
});

app.listen(8080, () => { console.log("App rodando!") });