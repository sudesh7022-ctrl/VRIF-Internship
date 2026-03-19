```javascript id="z4p7mx"
/*
Write a function to find the largest of two numbers.
*/

function findLargest(num1, num2) {
  // Validate input
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "Invalid input";
  }

  // Return the larger number
  return num1 >= num2 ? num1 : num2;
}
```
