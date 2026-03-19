// Write a function to calculate the factorial of a number


function getFactorial(num) {
    let result = 1;
    
    // We start from 2 because multiplying by 1 doesn't change the result
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    
    return result;
}

// Example usage:
console.log(getFactorial(5)); // Output: 120
