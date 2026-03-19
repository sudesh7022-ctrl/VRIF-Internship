/*
Write a function to convert hours into minutes.
*/

function convertToMinutes(hours) {
  // Validate input
  if (typeof hours !== "number") {
    return "Invalid input";
  }

  // Convert hours to minutes
  return hours * 60;
}