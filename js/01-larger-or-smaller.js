
alert('Larger or smaller?');

// Accept 2 integers by prompts
let int1 = parseInt(prompt('Enter your first number'));
let int2 = parseInt(prompt('Enter your second number'));

// Display the larger of the two using simple conditional statments

if(int1 > int2) {
    document.write(`The larger number is ${int1}.`);
}

if(int2 > int1) {
  document.write(`The larger number is ${int2}.`);
}

if(int1 === int2) {
  document.write(`The numbers are equal.`);
}


