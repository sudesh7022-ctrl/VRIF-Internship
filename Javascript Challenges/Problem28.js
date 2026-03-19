/*
Write a function to find the sum of three numbers.
*/

function sumThreeNumbers(num1, num2, num3) {
  // Validate input
  if (
    typeof num1 !== "number" ||
    typeof num2 !== "number" ||
    typeof num3 !== "number"
  ) {
    return "Invalid input";
  }

  // Return sum
  return num1 + num2 + num3;
}