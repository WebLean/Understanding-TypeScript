let appId = 'abc';
const button = document.querySelector('button');

function add(n1: number, n2: number) {
  if (n1 + n2 > 0) {
    return n1 + n2;
  }
  // return
}

function clickHandler(message: string, age: number) {
  let username;
  console.log('Clicked! ' + message);
}

// a comment
if (button) {
  button.addEventListener(
    'click',
    clickHandler.bind(null, "You're welcome!", 30)
  );
}
