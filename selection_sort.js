// Implementation of seletion sort

var swap = function(array, firstIndex, secondIndex) {
    var temp;
	temp = array[firstIndex];
	array[firstIndex] = array[secondIndex];
	array[secondIndex] = temp;
};

var indexOfMinimum = function(array, startIndex) {
    // Set initial values for minValue and minIndex,
    // based on the leftmost entry in the subarray:  
    var minValue = array[startIndex];
    var minIndex = startIndex;

    // Loop over items starting with startIndex, 
    // updating minValue and minIndex as needed:
    for (var i = minIndex + 1; i < array.length; i++) {
        if (array[i] < minValue) {
            minValue = array[i];
            minIndex = i;
        }
    }
    return minIndex;
};

var selectionSort = function(array) {
    var temp;
    for (var i = 0; i < array.length; i++) {
        temp = indexOfMinimum(array, i);
        swap(array, i, temp);
    }
};

var array = [22, 11, 99, 88, 9, 7, 42];
selectionSort(array);
console.log("Array after sorting:  " + array);

// The loop in indexOfMinimum will always make n^2/2 + n/2 iterations, because summing numbers from 1 to n is (n + 1)(n / 2), which equals n^2/2 + n/2.
// let's say n = 100 and selection sort takes n^2/10^6 seconds. Then the running time of selection sort is about 100^2/10^6 = 1/100 seconds.
// but what if n = 1000? Then selection sort takes about 1000^2/10^6 = 1 second. The array grew by a factor of 10, but the running time increased 100 times.
// so basically pretty shit at larger array sizes