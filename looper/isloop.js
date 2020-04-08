'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
    
    let current = linkedlist.head
    let soFar = []

    while (current.next){
        if (soFar.includes(current)) {
            return true;
        } else {
            soFar.push(current)
            current = current.next
        }
    }
    return false
};

/*
Iterate through the list
Store each new value in an array
If a new value already exists in the array, return true
If there is no next value, return false
*/

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop