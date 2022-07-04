import { asyncForEach } from "../../utils";

export const fetchMovies = async (searchTerm) => {
  try {
    const searchParameters = searchTerm.split(" ");
    const planets = await fetchPlanets();
    const characters = await fetchCharacters();
    const moviesEntities = [...planets, ...characters];
    let filmsURL = [];
    searchParameters.forEach((parameter) => {
      const matches = moviesEntities.filter((entity) =>
        entity.name.replace(/\s+/g, "").toLowerCase().includes(parameter)
      );

      if (matches.length === 0) {
        return []
      };

      filmsURL = [...matches[0].films];
    });
    let films = [];
    await asyncForEach(filmsURL, async (filmURL) => {
      const swApiData = await fetch(filmURL);
      const data = await swApiData.json();
      films.push(data);
    });
    return films;
  } catch (error) {
      console.error(error);
  }
};

export const fetchMovie = async (movieId) => {
    const swApiData = await fetch(`${process.env.REACT_APP_SWAPI_URL}/films/${movieId}`);
    const data = await swApiData.json();
    return data;
}

const fetchPlanets = async () => {
  try {
    const swApiData = await fetch(
      `${process.env.REACT_APP_SWAPI_URL}/planets/`
    );
    const data = await swApiData.json();
    return data.results;
  } catch (error) {
    console.error(error);
  }
};

const fetchCharacters = async () => {
  try {
    const swApiData = await fetch(`${process.env.REACT_APP_SWAPI_URL}/people/`);
    const data = await swApiData.json();
    return data.results;
  } catch (error) {
    console.error(error);
  }
};
