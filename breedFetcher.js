const request = require('request');
const breedName = process.argv[2];
const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
try {
  request(URL, function (error, response, body) {
    const data = JSON.parse(body);
  if (error || data.length === 0) {
    error = "Invalid input: cannot find data with that value"
    throw error;
  }
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});
} catch (error) {
  console.log(`Error: ${error}`);
}