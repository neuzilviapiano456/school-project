// Generate a random number between 1 and 100
function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

// Use the random number to generate a random color
function getRandomColor() {
  const num = getRandomNumber();
  const colors = ["red", "orange", "yellow", "green", "blue", "purple"];
  return colors[num % colors.length];
}

// Use the random color to generate a random background color
function getRandomBackgroundColor() {
  const color = getRandomColor();
  const brightness = Math.random() * 0.5 + 0.2;
  return `hsl(${color}, ${brightness}, ${brightness})`;
}
