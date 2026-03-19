/*
Write a function to add two numbers.
*/

function addNumbers(num1, num2) {
  // Validate input
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "Invalid input";
  }

  // Return sum
  return num1 + num2;
}