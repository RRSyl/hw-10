const Movie = require('../models/movie');

class MovieRepository {
  async create(data) {
    return await Movie.create(data);
  }

  async findAll() {
    return await Movie.findAll();
  }

  async findById(id) {
    return await Movie.findByPk(id);
  }

  async update(id, data) {
    const movie = await Movie.findByPk(id);
    if (!movie) return null;
    return await movie.update(data);
  }

  async delete(id) {
    const movie = await Movie.findByPk(id);
    if (!movie) return null;
    return await movie.destroy();
  }
}

module.exports = new MovieRepository();
