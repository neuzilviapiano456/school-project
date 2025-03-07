// Function to generate a random number between 1 and 10
function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

// Calling the function to generate a random number
let randomNumber = getRandomNumber();
console.log(`Generated random number: ${randomNumber}`);
