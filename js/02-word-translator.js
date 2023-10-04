
alert('The Word Translator');

// Prompt user for language code
let langCode = prompt('Please enter your language code using the following options:\n "es" "de" "en" "fr"');

// Use simple conditional statements
if (langCode === "es") {
  console.log('Hello World translated in Spanish is: Hola Mundo');
} else if (langCode === "de") {
  console.log('Hello World translated in Dutch is: Hallo Wereld');
} else if (langCode === "en") {
  console.log('Hello World translated in English is: Hello World');
} else if (langCode === "fr") {
  console.log('Hello World translated in French is: Bonjour le monde');
} else {
  console.log('Hello World translated in English is: Hello World');
};