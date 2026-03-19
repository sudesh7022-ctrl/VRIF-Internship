
// Write a function to convert a string to titlecase.


function convertToTitleCase(str) {
  // Validate input
  if (typeof str !== "string") {
    return "Invalid input";
  }

  // Convert to title case
  return str
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}