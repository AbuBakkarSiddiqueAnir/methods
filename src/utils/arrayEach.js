/**
 * A specialized version of 'forEach' for arrays,
 * @private
 * @param {array} the array to iterate over.
 * @param {function arrayEach(array, iteratee) iteratee the function invoked per iteration.
 * @returns {array} return 'array'

 }}
 */


 export const arrayEach = (array, iteratee) => {
    let index = -1;
    const length = array.length;

    while(++index < length) {
        if(iteratee(array[index], index, array) === false) {
            break;
        }
    }
    return array
 }

