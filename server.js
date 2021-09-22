//Para iniciar o servidor, utilize node server ou npm start
const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
    const items = [
        {
            title: "L",
            message: "er livros semanalmente"
        },
        {
            title: "O",
            message: "rar diariamente"
        },
        {
            title: "V",
            message: "iajar é essencial"
        },
        {
            title: "E",
            message: "studo e prática levam ao sucesso"
        },
    ];

    const subtitle = "Uma linguagem de modelagem para criação de páginas HTML utilizando JS."

    res.render("pages/index", {
        qualities: items,
        subtitle: subtitle,
    });
})

app.get("/about", function (req, res) {
    res.render("pages/about");
})

app.listen(8080)
console.log("Running");