const films = require("./modules/films");
const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;
const HOST = "localhost";

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine", "pug");
app.set("views", "./views");

app.get("/", films.getHome);
app.get("/film/:title", films.getFilm);
app.get("/notFound", films.filmNotFound);
app.post("/film", films.postFilm);

app.use((req,res,next) => res.status(404).send('Unable to find the requested resource!'));

app.listen(PORT, ()=> console.log(`Server running at http://${HOST}:${PORT}`));
