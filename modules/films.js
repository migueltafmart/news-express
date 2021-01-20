const fetch = require("node-fetch");
const API_KEY = "be18778c";

exports.getHome = (req, res) => {
    res.render("home");
};
exports.getFilm = (req, res) => {
    if (req.params.title) {
        fetch(`https://www.omdbapi.com/?t=${req.params.title.replace('-','+')}&apikey=${API_KEY}`)
            .then(res => res.json())
            .then(film => {
                if(film.Title){
                    res.render("film", {
                        filmTitle: film.Title,
                        filmDir: film.Director,
                        filmPlot: film.Plot,
                        filmPoster: film.Poster
                    })
                }else{
                    res.redirect("/notFound")
                }
                
            })
            .catch(e => console.log(e + " Error. movie not found"))
    }
}
exports.postFilm = (req, res) => {
    res.redirect("film/" + req.body.title);
}
exports.filmNotFound = (req, res) =>{
    res.render("film", {filmTitle: " 404: sMovie not found", filmPoster: "./img/404.jpeg"});
}