const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.film_titles = function () {
  return this.films.map(film => film.title);
}

Cinema.prototype.findByTitle = function (title) {
  return this.films.find(film => film.title === title); 
}

module.exports = Cinema;
