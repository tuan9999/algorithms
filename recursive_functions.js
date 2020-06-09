// Recursive palindrom checker

// Returns the first character of the string str
var firstCharacter = function(str) {
    return str.slice(0, 1);
};

// Returns the last character of a string str
var lastCharacter = function(str) {
    return str.slice(-1);
};

// Returns the string that results from removing the first
//  and last characters from str
var middleCharacters = function(str) {
    return str.slice(1, -1);
};

var isPalindrome = function(str) {
    // base case #1
    if (str.length <= 1) {
        return true;
    }
    // base case #2
    if (firstCharacter(str) !== lastCharacter(str)) {
        return false;
    }
    // recursive case
    return isPalindrome(middleCharacters(str));
};

var checkPalindrome = function(str) {
    println("Is this word a palindrome? " + str);
    println(isPalindrome(str));
};

// ************************************************************
// Recursive factorial

var factorial = function(n) {
	// base case: 
	if (n === 0) {
	    return 1;
	}
	// recursive case:
    return n * factorial(n - 1);
};

// ************************************************************
// Recursive POW

var isEven = function(n) {
    return n % 2 === 0;
};

var isOdd = function(n) {
    return !isEven(n);
};

var power = function(x, n) {
    // base case
    if (n === 0) {
        return 1;
    }
    // recursive case: n is negative
    if (n < 0) {
        return 1 / x * power(x, n + 1);
    }
    // recursive case: n is odd
    if (isOdd(n)) {
        return x * power(x, n - 1);
    }
    // recursive case: n is even
    if (isEven(n)) {
        return x * power(x, n/2);
    }
};