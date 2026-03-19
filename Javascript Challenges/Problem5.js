/*
Write a function to convert a number into a string with dashes between each digit.
*/

function addDashes(num) {
  // Validate input
  if (typeof num !== "number") {
    return "Invalid input";
  }

  // Convert number to string and add dashes
  return num.toString().split("").join("-");
}