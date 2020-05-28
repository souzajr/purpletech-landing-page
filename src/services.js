const axios = require('axios');

axios.defaults.baseURL = 'https://app.purpletech.com.br';
axios.defaults.headers.post['Content-Type'] = 'application/json';

module.exports = {
  sendMessage(data) {
    return new Promise((resolve, reject) => axios
      .post('/sendMessage', data)
      .then((response) => resolve(response))
      .catch((err) => reject(err)));
  },

  getPortfolio() {
    return new Promise((resolve, reject) => axios
      .get('/getPortfolio')
      .then((response) => resolve(response))
      .catch((err) => reject(err)));
  },
};
