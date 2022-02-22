import axios from "axios";

export const api = axios.create({
  baseURL: 'https://prova.deploy.profranchising.com.br'
})