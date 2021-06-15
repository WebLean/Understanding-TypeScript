// hover it over
// We should more specific

// const person: {
//   name: string;
//   age: number;
// } = {
const person = {
  name: 'Jonghyeon',
  age: 28,
  hobbies: ['Sports', 'Cooking'],
};

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
