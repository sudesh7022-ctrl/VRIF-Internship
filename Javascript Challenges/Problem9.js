/*
Write a function to hide a credit card number.
*/

function hideCardNumber(cardNumber) {
  // Validate input
  if (typeof cardNumber !== "string" || cardNumber.length < 4) {
    return "Invalid input";
  }

  // Hide all but last 4 digits
  const visiblePart = cardNumber.slice(-4);
  const hiddenPart = "*".repeat(cardNumber.length - 4);

  return hiddenPart + visiblePart;
}