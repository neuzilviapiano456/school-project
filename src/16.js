function getRandomCode() {
  const codes = ['12345', 'abcde', 'qwerty'];
  return codes[Math.floor(Math.random() * codes.length)];
}
