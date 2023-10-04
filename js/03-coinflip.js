alert('The "Coin Flip" Game');

// get random number in new variable
let coinFlip = Math.round(Math.random());
console.log(coinFlip);

// Prompt user to select heads or tails
let choice = prompt('Heads or Tails?').toLowerCase();
console.log(choice);

// Use conditional to check result of the coinFlip
// 1 will be heads, 0 will be tails
if (coinFlip == 1) {
  var flipResult = 'heads'
} else if (coinFlip == 0) {
  var flipResult = 'tails'
};

// Nested conditionals to play game
if (flipResult === choice) {
    if(choice === 'heads') {
      alert('The flip was heads and you chose heads... you win!');
    } else if (choice === 'tails') {
      alert('The flip was tails and you chose tails... you win!');
    } else {
      alert('Please enter only "heads" or "tails"');
    }
} else if (flipResult !== choice) {
    if(choice === 'heads') {
      alert('The flip was tails and you chose heads... you lose!');
    } else if (choice === 'tails') {
      alert('The flip was heads and you chose tails... you lose!');
    } else {
      alert('Please enter only "heads" or "tails"');
    }
};

