// Implementation of binary search

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

function binary_search(array, target) {

	// set min to index 0 and max to index of last element
	var min = 0;
	var max = array.length - 1;
	var guess = Math.floor((min + max) / 2);
	
	while (array[guess] !== target) {
		// the guess was too low, that is, array[guess] < target
		if (array[guess] < target) {
			min = guess + 1;
		}
		// the guess was too high. Set max = guess - 1.
		else if (array[guess] > target) {
			max = guess - 1;
		}
		// target number is not in array
		if (max < min) {
			return(-1);
		}
		guess = Math.floor((min + max) / 2);
	}
	
	return(guess);
}

console.log(binary_search(primes, 73));

// Another implementation where loop is on min and max values

var doSearch = function(array, targetValue) {
	var min = 0;
	var max = array.length - 1;
    var guess;
    while (max >= min) {
        guess = Math.floor((min + max) / 2);
        if (array[guess] < targetValue) {
            min = guess + 1;   
        }
        else if (array[guess] > targetValue) {
            max = guess - 1;
        }
        else {
            return (guess);
        }
    }
	return -1;
};

// to calculate max number of guess use log2(target) + 1, i.e. If n is 128, binary search will require at most 8 (log_2 128 + 1) guesses.