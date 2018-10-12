const express = require("express");
const hbs = require("hbs");

const app = express();
hbs.registerPartials(__dirname + "/views/partial")
app.set("view engine", "hbs");


app.get("/", (req, res) => {
    res.render("om_os.hbs", { År: new Date().getFullYear() });
});

app.get("/about", (req, res)=> {
res.render("index.hbs");
});
app.use(express.static(__dirname + "/public"))


app.listen(3000);