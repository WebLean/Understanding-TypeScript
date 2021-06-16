const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];
activeHobbies.push(...hobbies);

const person = { firstName: 'Max', age: 30 };
const copiedPerson = { ...person };

const add = (...numbers: number[]) => {
  return numbers.reduce((a, b) => a + b, 0);
};

const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);

const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobbies, hobby1, hobby2);

const { firstName: userName, age } = person;

console.log(userName, age);
