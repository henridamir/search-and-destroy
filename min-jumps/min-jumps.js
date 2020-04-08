'use strict';

// Complete this algo
const minJumps = arr => {

    let pointer = 0;
    let jumps = 0;
    let done = false; 

    

        while (!done) {
            if ((pointer + arr[pointer]) >= arr.length - 1) {
                jumps += 1;
                done = true;
            } else {
                    let scanned = arr.slice(pointer, arr[pointer]+1)
                    let worthIt = scanned.filter( (x, i) => (arr[pointer] - (i - pointer) ) < x)
                    if (worthIt.length > 0) {
                        let selected = Math.max(...worthIt)
                        let jumpToIndex = scanned.lastIndexOf(selected) + pointer
                        jumps += 1;
                        pointer = jumpToIndex
                    } else {
                        jumps += 1;
                        pointer += arr[pointer]
                    }
                }
            }
    return jumps
};

/*
1) If current value + current index 
>= array length, finish

2) For current index, scan forwards as much as current value
Find the largest value scanned

See if (current value - difference in indeces from current value and 
largest number scanned) is smaller than largest number scanned
- if so, add one jump and move to the index of that largest value
-if not, add one jump and move to the (current index + value) position

Repeat all
*/

module.exports = minJumps