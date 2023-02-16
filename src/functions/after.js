/**
 * The opposite of `before`. This method creates a function that invokes
 * `func` once it's called `n` or more times.
 *
 * @category Function
 * @param {number} n The number of calls before `func` is invoked.
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * const saves = ['profile', 'settings']
 * const done = after(saves.length, () => console.log('done saving!'))
 *
 * forEach(saves, type => asyncSave({ 'type': type, 'complete': done }))
 * // => Logs 'done saving!' after the two async saves have completed.
 */
function after(n, func) {
    if (typeof func !== 'function') {
      throw new TypeError('Expected a function')
    }
    n = n || 0
    return function(...args) {
      if (--n < 1) {
        // as the func isn't using this value, it is safe to use null of undefined as the first argument of apply method, but using this is good practice.
        return func.apply(this, args)
      }
    }
  }

  export default after

//   function greet(name) {
//     console.log(`Hello, ${name}! My name is ${this.name}.`)
//   }

//   const person = { name: 'Alice' }

//   const logGreet = after(3, greet)

//   logGreet.apply(person, ['Bob']) // logs 'Hello, Bob! My name is Alice.'
//   logGreet('Charlie') // logs 'Hello, Charlie! My name is undefined.'