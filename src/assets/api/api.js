import axios from "axios";

export const key = "67c1b764b81ffc56216aaf91692930d2";
export const api = axios.create({
  baseURL: `https://api.themoviedb.org/3/movie`,
});

export const _LoadFilms = async (setFilms) => {
  try {
    const response = await api.get(
      `/popular?api_key=${key}&language=pt-BR&page=1`
    );
    setFilms(response.data.results);
  } catch (error) {
    console.log(error);
  }
};
export const GetDetails = async (id) => {
  try {
    const response = await api.get(`${id}?api_key=${key}&language=pt-BR`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
