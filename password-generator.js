const generator = require('generate-password');

function generatePassword() {
  const password = generator.generate({
    length: 12,
    numbers: true,
    symbols: true,
    uppercase: true,
    excludeSimilarCharacters: true,
  });
  console.log(password);
}

generatePassword();