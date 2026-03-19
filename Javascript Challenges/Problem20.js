/*
Write a function to calculate the discount received.
*/

function calculateDiscount(originalPrice, discountedPrice) {
  // Validate input
  if (typeof originalPrice !== "number" || typeof discountedPrice !== "number") {
    return "Invalid input";
  }

  // Calculate discount
  return originalPrice - discountedPrice;
}