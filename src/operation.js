import {arrayEach} from './utils/arrayEach'


function multiplyByTwo(num, index, array) {
    array[index] = num * 2; // Multiply the current element by 2
  }

const myArray = [1, 2, 3, 4, 5];

arrayEach(myArray, multiplyByTwo);

console.log(myArray);