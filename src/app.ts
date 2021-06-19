const names: Array<string> = []; // string[]
// names[0].split(' ');

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('This is done!');
  }, 2000);
});
