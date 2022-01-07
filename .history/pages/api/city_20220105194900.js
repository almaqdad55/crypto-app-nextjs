const rp = require('request-promise');
const requestOptions = {
  method: 'GET',
  uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
  qs: {
    start: '1',
    limit: '5000',
    convert: 'USD',
  },
  headers: {
    'X-CMC_PRO_API_KEY': '5ea39bd3-2ca8-4812-a690-255ac8b99e71',
  },
  json: true,
  gzip: true,
};

rp(requestOptions)
  .then((response) => {
    console.log('API call response:', response);
  })
  .catch((err) => {
    console.log('API call error:', err.message);
  });
