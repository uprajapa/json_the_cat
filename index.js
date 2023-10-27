const { fetchBreedDescription } = require('./breedFetcher');

// eslint-disable-next-line no-undef
const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});