class Movie {
    constructor(id = "none",
                name = "First movie ever",
                year = "1895", 
                genre = "vintage",
                director = "Lumiere brothers",
                description = "First movie in history, created by Lumiere brothers",
                nsfw = false) {

      this.id = id;
      this.name = name;
      this.year = year;
      this.genre = genre;
      this.director = director;
      this.description = description;
      this.nsfw = nsfw;
    }
  }
  module.exports = { Movie };
  