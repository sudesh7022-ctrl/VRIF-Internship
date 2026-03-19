
// Write a function to convert an angle given in degrees to radians.


function degreesToRadians(degrees) {
  // Validate input
  if (typeof degrees !== "number") {
    return "Invalid input";
  }

  // Convert degrees to radians
  const radians = (Math.PI / 180) * degrees;

  return radians;
}

// Example usage
console.log(degreesToRadians(90).toFixed(3)); // 1.571