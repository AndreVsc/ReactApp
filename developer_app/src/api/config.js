import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.2.109:3000', // Altere para o endereço IP correto do seu servidor Node.js
});

export default api;