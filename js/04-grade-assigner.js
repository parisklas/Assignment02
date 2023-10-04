
alert('The Grade Assigner');

// Collect user's grade between 1 and 100
let grade = parseInt(prompt('Enter your grade (between 1 - 100)'));

// Make sure number is between 1 and 100
if (grade < 1 || grade > 100) {
  alert('Please enter a number only between 1 and 100');
}

// Conditional else if
if (grade >= 90 && grade < 100) {
  console.log('You received an A.');
} else if (grade >= 80 && grade < 90) {
  console.log('You received a B.');
} else if (grade >= 70 && grade < 80) {
  console.log('You received a C.');
} else if (grade >= 60 && grade < 70) {
  console.log('You received a D.');
} else if (grade < 60) {
  console.log('You received an F.');
};
