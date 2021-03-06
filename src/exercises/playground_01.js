// !-----------------------
// ! Object property access
// !-----------------------

// ? 🐒 [Questions]: Answer the following questions:
// ?
// ? 1. What are the three different ways in JS to access object properties?
// Your answer:
//
//
//
//
// ? 2. When using the `dot property accessor` the property has to be an `identifier`.
// ?    Use https://developer.mozilla.org/en-US/docs/Glossary/Identifier to explain what an idenifier is.
// Your answer:
//
//
//

const obj = { "32a": 1 };

console.log(obj["32a"]);

// -----------------------------------------------------------------------------

// !---------------
// ! var, let, const
// !---------------

// ! Sopce (var)

var newWord = "hello";
const testScope = () => {
  newWord = "goodbye";
};
console.log(newWord);

// ! Scope (const)
if (true) {
  const word = "hello";
  word;
}

word; // undefined

// ! Scope (var)
if (1 == 1) {
  var word = "hello";
}
word; // "hello"

// ? 🐒 [Question]: Explain the different results for `var` and `const`
// Your answer:
//
//

// ! Re-assignment (const)

const mySum = (one, two, three) => {
  return one + two + three;
};

const returnValue = {};
returnValue.sds = mySum(2, 6, 1); // assignment
console.log(returnValue.sds);

// ? 🐒 [Question]: Why is this assignment to property of a `const` possible?
// Your answer:
//
//

// -----------------------------------------------------------------------------

// !-------------------------------
// ! Array destructuring and spread
// !-------------------------------

// ! Array spread
// !-------------

const coordinates = [39, 21]; // lat, lng

// Extract second argument only
const [, lng] = coordinates; // equivalent to: `const lng = coordinates[1];`

// ! Spread function arguments
// !--------------------------

const values = [1, 2, 3];
// Elegant solution with spread operator:
const result = mySum(...values);
// Verbose solution without spread operator:
// const result = mySum(values[0], values[1], values[2]);

const myObj = { a: 1, b: 2, c: 3 };

const cloneOfMyObj = { ...myObj };
const shallowClone = myObj;
console.log(cloneOfMyObj);

console.log(result);

// ! Array destructuring (nested)
// !----------------------

const myArray = [1, [2, 3]];
const [, [, third]] = myArray;
console.log(third);

const props = { data: { one: [1, 2, 3], two: [1, 2, 3] } };

const { data: { one: [, myTwo] } } = props; // ?

console.log(myTwo)

// const [value, setValue] = useState(null);



// -----------------------------------------------------------------------------

// !---------------------------------------------------------------------
// ! nullish coalescing operator (??) and optional chaining operator (?.)
// !---------------------------------------------------------------------

// This example caused issue with Quokka. Please try in browser console:

let greeting = { say: 'hello' };
console.log(greeting?.say?.toUpperCase() ?? "not available"); // "HI"

console.log(greeting.say?.toUpperCase() ?? "not available"); // "HI"
console.log(greeting.dontSay?.toUpperCase() ?? "not available"); // "not available"

// ? 🐒 [Question]: Explain this interplay of nullish coalescing operator (??) and optional chaining operator (?.)
// Your answer:
//
//

// ! Alternative with ternary operator (? :)
console.log(greeting.say ? greeting.say.toUpperCase() : "not available"); // "HI"

// ! In case that `greeting` might be undefined in the past logical and operator (`&&`

// ! optional chaining operator for arrays
const numbersArray = [1,2,3];
console.log(numbersArray?.[5]);

// -----------------------------------------------------------------------------

// !---------------
// ! Type Coercion
// !---------------

// ? 🐆 [Task]: Guess the result of each line first and then uncomment the `console.log` statement:

const one = true + false;
// console.log(one);

const two = 1 + 2 + " hello world" + 5 + 3 + 43;
// console.log(two);

const three = 1 + true;
// console.log(three);

const four = "hello" + true;
// console.log(four);

const five = {} + {};
// console.log(five);

const six = {} === {};
// console.log(six);

const seven = [1, 2] == "1,2";
// console.log(seven);

// !--------------------------------
// ! Object.is() comparison operator
// ! https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
// !--------------------------------

const eight = Object.is(+0, -0);
// console.log(eight);

// This result was computed wrong on my computer 😅
const nine = +0 === -0;
// console.log(eight);

const car1 = { wheels: 4 };
const car2 = car1;
const ten = Object.is(car1, car2);
// console.log(ten);

car1.wheels = 5; // mutate original car1 object
const eleven = Object.is(car1, car2);
// console.log(eleven);

const twelve = Object.is(car1, { wheels: 5 });
// console.log(twelve);

console.log(Object.is({ a: "blue" }, { a: "red" }));
