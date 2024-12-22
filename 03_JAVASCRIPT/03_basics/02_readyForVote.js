/* write a program to check person is eligible for vote or not. 
if person age is above or equal to 18. 
if person age is above to 80, he can't vote.
*/

let age = 50;

if (age > 18 && age < 80) {
    console.log("You can vote.");
} else if (age == 18 || age == 80) {
    console.log("You can vote.");    
} else {
    console.log("You can not vote.");    
}

//  if (age > 18) {
//     console.log("You can vote.");
// } else if (age < 80) {
//     console.log("You can vote.");
// }  else if (age == 18) {
//     console.log("You can vote.");
// } else if (age == 80) {
//     console.log("You can vote.");
// } else if (age > 80) {
//     console.log("You can not vote.");
// } else if (age < 18) {
//     console.log("You can not vote.");
// } else {
//     console.log("else");
// }