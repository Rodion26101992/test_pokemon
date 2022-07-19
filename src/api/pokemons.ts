import axios from 'axios';

export async function getPokemon(url: string) {
  try {
    return axios(url);
  } catch (e) {
    alert(e);
  }
}
