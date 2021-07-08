const axios = require("axios");
const api = axios.create({
  baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc',
  headers: {
    Authorization: process.env.GITHUB_TOKEN,

  },
});

module.exports = api;
