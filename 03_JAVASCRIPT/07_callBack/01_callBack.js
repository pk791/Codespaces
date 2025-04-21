// function greet(name, callBack) {
//     console.log(`Hello ${name}`);
//     callBack()
// }

// function login(loggedIn) {
//     console.log("You are logged in");
//     loggedIn()
// }

// function logout() {
//     console.log("You are logged out");
// }

// greet("Hari", login() );

function randomColor() {
  const num = Math.random() * 1000000;
  const h = Math.floor(num);
  if (h < 100000) {
    randomColor();
  }
  console.log(h);
}
randomColor()
