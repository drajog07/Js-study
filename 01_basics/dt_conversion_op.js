// let score = "abc"
// console.log(typeof score)
// console.log(typeof (score)) // pass as a method

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber)
// console.log(valueInNumber)

/*format => initial (after con. to Number) type value 
String(having other than number)  Number  Nan, 
String(having only number) Number same as String,
null Number 0, undefined Number Nan, true Number 1 */
 
// let isLoggedIn = "0"

// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(typeof booleanIsLoggedIn)
// console.log(booleanIsLoggedIn) // true for "0"

/* conversion to boolean 
number other than 0 -> true
Sting other than "" (empty string) -> true*/


let someNumber = 33

let str = String(someNumber)
console.log(typeof str)  // String
console.log(str) // 33