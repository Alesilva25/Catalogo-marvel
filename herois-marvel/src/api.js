import axios from "axios";

const api_url = "https://gateway.marvel.com/v1/public";
const public_key = import.meta.env.VITE_MARVEL_public_key;
const hash = import.meta.env.VITE_MARVEL_HASH;
const TS = import.meta.env.VITE_MARVEL_TS;

export const api = axios.create({
  baseURL: api_url,
  params: {
    apikey: public_key,
    ts: TS,
    hash: hash,
  },
});

export const getCharacters = async (nameStartsWith = "") => {
  const response = await api.get("/characters", {
    params: {
      limit: 20,
      nameStartsWith,
    },
  });
  return response.data.data.results;
};