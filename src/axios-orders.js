import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://local-bitcoin.firebaseio.com/'
});

export default instance;