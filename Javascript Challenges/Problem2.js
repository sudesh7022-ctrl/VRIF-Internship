
// Write a function to round off a given number.

function roundOff(num, ndigits) {
  // Validate input
  if (typeof num !== "number" || typeof ndigits !== "number" || ndigits < 0) {
    return "Invalid input";
  }

  // Round and return as string (toFixed returns string)
  return num.toFixed(ndigits);
}

// Example usage
console.log(roundOff(0.778899, 2)); // "0.78"