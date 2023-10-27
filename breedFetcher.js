const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(URL, function(error, response, body) {
    if (!error && response.statusCode === 200 && body.length > 2) {
      const data = JSON.parse(body);
      // console.log(`Body: ${body.length}`);
      // console.log(`Response: ${response.statusCode}`);
      callback(error, data[0].description);
    } else if (response.statusCode === 400) {
      error = `Something wrong with URL: Bad request: ${response.statusCode}`;
      callback(error, null);
    } else {
      error = `No data found with given value`;
      callback(error, null);
    }
  });
};

// const breedDescription = fetchBreedDescription('Siberian');
// console.log(breedDescription);
module.exports = { fetchBreedDescription };