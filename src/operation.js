import {arrayEach} from './utils/arrayEach'
import after from './functions/after';


//arrayEach function invoked
function multiplyByTwo(num, index, array) {
    array[index] = num * 2; // Multiply the current element by 2
  }

const myArray = [1, 2, 3, 4, 5];

// arrayEach(myArray, multiplyByTwo);


//after function invoked

const logHello = after(2, function() {
  console.log('Hello!')
})

logHello()
logHello()
