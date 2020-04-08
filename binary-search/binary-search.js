'use strict';

// const test1 = [1,3,4,5,10,15,20,22,23,98,1000];
// const test2 = [-3,-2,0, 9, 10, 11, 12, 15, 17, 18, 19, 20];
// const test3 = [-0.5, 0.03, 2.6, 3, 3.5, 3.777777, 5];

// Complete this algo
const binarySearch = (array, target) => {
	if (array.length === 1) {
		if (target !== array[0]) {
			return false
		}
	}
	let pointer = Math.floor(array.length/2)
	if (array[pointer] === target) {
		return true
	}
	if (array[pointer] < target) {
		return binarySearch((array.splice(pointer)), target)
	} else {
		return binarySearch((array.splice(0, pointer)), target)
	}
};

// check whether current val === target
// if true return true
// if false
	// if smaller, if pointer-1 exists change pointer to -1 and recurse
	// if larger, if pointer+1 exists change pointer to +1 and recurse
	//return false


/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch