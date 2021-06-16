const userName = 'Max';
// username = "Maximilian";
let age = 30;

age = 29;

// "var" has Global scope
var result;

function add(a: number, b: number) {
  // "let" has Block scope
  let result2;
  result = a + b;
  return result;
}

console.log(result);

if (age > 20) {
  var isOld = true;
  let isOld2 = true;
}

// isOld make Error in TypeScript, but in JavaScript, It's not
console.log(isOld);
