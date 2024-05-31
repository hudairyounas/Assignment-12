//? 1. Write a js program to find cube of any number using function.

// function cube(number) {
//     console.log(number * number * number);
// };

// cube(5);

//? 2. Write a js program to find diameter, circumference and area of circle using functions.

//? For diameter of a circle
// function diameter(radius) {
//     console.log(2 * radius);
// };

// diameter(5);

//? For circumference of a circle

// function circumference(radius) {
//     console.log(2 * Math.PI * radius);
// };

// circumference(5);

//? For area of a circle

// function area(radius) {
//     console.log(Math.PI * radius**2);
// };

// area(5);

//? 3. Write a js program to find maximum and minimum between two numbers using functions.

// function minAndMax(number1, number2) {
//     if (number1 > number2) {
//         console.log(number1);
//     } else {
//         console.log(number2);
//     }
// };

// minAndMax(56, 78);

//? 4. Write a js program to check whether a number is even or odd using functions.

// function evenOrOdd(number) {
//     if (number % 2 === 0) {
//         console.log("even");
//     } else {
//         console.log("odd");
//     }
// };

// evenOrOdd(5);

//? 5. Write a js program to check whether a number is prime, Armstrong or perfect number using functions.

//? 6. Write a js program to find all prime numbers between given interval using functions.

//? 7. Write a js program to print all strong numbers between given interval using functions.

//? 8. Write a js program to print all Armstrong numbers between given interval using functions.

//? 9. Write a js program to print all perfect numbers between given interval using functions.

//? 10. Write a js program to find power of any number using function.

// function power(number) {
//     console.log(number**2);
// };

// power(8);

//? 11. Write a js program to print all natural numbers between 1 to n using function.

//? 12. Write a js program to print all even or odd numbers in given range using function.

// function printEvenOrOddNumbers(start, end, isEven) {
//     console.log(`${isEven ? "Even" : "Odd"} numbers between ${start} and ${end} are:`);
//     for (let i = start; i <= end; i++) {
//         if ((isEven && i % 2 === 0) || (!isEven && i % 2 !== 0)) {
//             console.log(i);
//         }
//     }
// }

// printEvenOrOddNumbers(1, 20, true);
// printEvenOrOddNumbers(10, 30, false);

//? 13. Write a js program to find sum of all natural numbers between 1 to n using function.

//? 14. Write a js program to find sum of all even or odd numbers in given range using function.

//? 15. Write a js program to find reverse of any number using function.


// function reverseNumber(num) {
//     let reversed = 0;
//     while (num > 0) {
//         reversed = reversed * 10 + num % 10;
//         num = Math.floor(num / 10);
//     }
//     return reversed;
// }

// const number = 12345;
// const reversedNumber = reverseNumber(number);
// console.log(`Reverse of ${number} is:`, reversedNumber);

//? 16. Write a js program to check whether a number is palindrome or not using function.

// function isPalindrome(num) {
//     const numString = num.toString();

//     for (let i = 0; i < Math.floor(numString.length / 2); i++) {
//         if (numString[i] !== numString[numString.length - 1 - i]) {
//             return false;
//         }
//     }
//     return true;
// }

// const number1 = 12321;
// const number2 = 12345;

// console.log(`${number1} is palindrome:`, isPalindrome(number1));
// console.log(`${number2} is palindrome:`, isPalindrome(number2));


//? 17. Write a js program to find sum of digits of a given number using function.

// function sumOfDigits(num) {
//     return String(num).split('').reduce((sum, digit) => sum + parseInt(digit), 0);
// }

// const number = 12345;
// const digitSum = sumOfDigits(number);
// console.log(`Sum of digits of ${number} is:`, digitSum);

//? 18. Write a js program to find factorial of any number using function.

// Function to calculate factorial
// function factorial(num) {
//     if (num === 0 || num === 1) {
//         return 1;
//     } else {
//         return num * factorial(num - 1);
//     }
// }

// console.log(factorial(5));

//? 19. Write a js program to generate nth Fibonacci term using function.

// Function to generate nth Fibonacci term
// function fibonacci(n) {
//     if (n <= 1) {
//         return n;
//     } else {
//         return fibonacci(n - 1) + fibonacci(n - 2);
//     }
// }

// console.log(fibonacci(10));

//? 20. Write a js program to find GCD (HCF) of two numbers using function.

// function gcd(a, b) {
//     if (b === 0) {
//         return a;
//     } else {
//         return gcd(b, a % b);
//     }
// }

// console.log(gcd(24, 36));

//? 21. Write a js program to find LCM of two numbers using function.

// function lcm(a, b) {
//     const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
//     return (a * b) / gcd(a, b);
// }

// console.log(lcm(24, 36));

//? 22. Write a js program to display all array elements using function.

// function array(arr) {
//     for (let i = 0; i <= arr.length; i++) {
//         console.log(arr[i]);
//     }
// };

// array([1, 2, 3, 4, 5]);

//? 23. Write a js program to find sum of elements of array using function.

// function sumOfArrayElem(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// };

// console.log(sumOfArrayElem([1, 2, 3, 4, 5]));

//? 24. Write a js program to find maximum and minimum elements in array using function.

// function minAndMax(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > arr[i + 1]) {
//             let temp = arr[i];
//             arr[i] = arr[i + 1];
//             arr[i + 1] = temp;  
//         }
//     }
//     console.log(arr[0], arr[arr.length - 1]);
// }

// minAndMax([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])