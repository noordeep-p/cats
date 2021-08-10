//////////////////////////////////////////////RETURN DATA SYNCHRONOUS

// data in memory
/*const catBreeds = {
  'Balinese': "Balinese are curious, outgoing, intelligent cats with excellent communication skills. They are known for their chatty personalities and are always eager to tell you their views on life, love, and what you’ve served them for dinner.",
  'Bombay': "The golden eyes and the shiny black coat of the Bombay is absolutely striking. Likely to bond most with one family member, the Bombay will follow you from room to room and will almost always have something to say about what you are doing, loving attention and to be carried around, often on his caregiver's shoulder."
};

// synchronous function to fetch a cat breed simply return value
const breedDetails = function(breed) {
  return catBreeds[breed];
};

// get the return value right away from the function & prints it out
const bombay1 = breedDetails('Bombay');
console.log(bombay1);*/

///////////////////////////////////////////RETURNING DATA USING ASYNC FUNCTIONS MY SOLUTION

const fs = require('fs');

const readDetailsFromFile = function(filename, dataReturn) {
  fs.readFile(`./data/${filename}.txt`, 'utf8', (error, data) => {
    if (!error) console.log(`${filename}:`); dataReturn(data);
  });
};

const returnData = function(data) {
  console.log(data);
};

readDetailsFromFile('Bombay', returnData);

///////////////////////////////////////////SOLUTION PROVIDED IN COMPASS

// const breedDetailsFromFile2 = function(breed, functionToRunWhenThingsAreDone) {
//   console.log('breedDetailsFromFile: Calling readFile...');
//   fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
//     // CHANGE: Pass data into callback instead of returning it directly
//     console.log("In readFile's Callback: it has the data.");
//     if (!error) functionToRunWhenThingsAreDone(data);
//   });
// };

// // CHANGE 1: Moved the console.log into a new function:
// const printOutCatBreed = breed => {
//   console.log('Return Value: ', breed); // => print out details correctly.
// };

// // CHANGE 2: we're now passing two arguments into breedDetailsFromFile: breed string and a callback function
// breedDetailsFromFile2('Bombay', printOutCatBreed);