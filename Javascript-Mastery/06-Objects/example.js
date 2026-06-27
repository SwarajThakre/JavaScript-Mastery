// 1. What is an Object? 
//  An object is a collection of related data and functions used to manipulate that data.
// Eg : 
//  const person = {
//      name: 'John',
//      age: 30,
//      sayHello: function() {
//          console.log('Hello, my name is ' + this.name + ' and I am ' + this.age + ' years old.');
//      }
//  };  

// 2. What is an Object Literal?
//  An object created using curly braces `{}`.

// 3. Accessing Object Properties
// There are two ways.
// 1. Dot notation
//  Example:
//  const person = {
//      name: 'John',
//      age: 30
//  };
//  console.log(person.name); // Output: John

// 2. Bracket notation
//  Example:
 const person = {
     name: 'John',
     age: 30
 };
 console.log(person['name']); // Output: John

// Use bracket notation when:
// Property name is stored in a variable
// Property contains spaces
// Property is dynamic

// Example:
const person2 = {
    name: 'Jahn',
    age: 30
};
const propertyName = 'name';
console.log(person2[propertyName]); // Output: John

// Property Names with Special Characters or Spaces
// If a property name contains special characters or spaces, you must use bracket notation to access it.
// Example:
const person3 = {
    'first name': 'John',
    'last name': 'Doe'
};
console.log(person3.name); // Output: undefined
console.log(person3['first name']); // Output: John
console.log(person3['last name']); // Output: Doe

// 4. Adding and Modifying Object Properties
// You can add or modify properties of an object using either dot notation or bracket notation.
// Example:
// const person = {
//     name: 'John',
//     age: 30
// };
// person.name = 'Jane'; // Modifying property value
// person['age'] = 31; // Modifying property value
// person.location = 'New York'; // Adding a new property

// 5. Deleting Object Properties
// You can delete properties of an object using the `delete` keyword.
// Example:
const person4 = {
    name: 'John',
    age: 30
};
delete person4.name; // Deleting a property
console.log(person4); // Output: { age: 30 }

// 6. Methods
// A function inside an object is called a method.
// Example:
// const person = {
//     name: 'John',
//     age: 30,
//     greet: function() {
//         console.log('Hello, my name is ' + this.name + ' and I am ' + this.age + ' years old.');
//     }
// };
// person.greet(); // Output: Hello, my name is John and I am 30 years old.

// Objects with const 
// In JavaScript, you can declare an object using the `const` keyword. However, this does not mean that the object is immutable. You can still modify the properties of the object, but you cannot reassign the object itself to a new value.
// Example:
// const person = {
//     name: 'John',
//     age: 30
// };
// person.name = 'Jane'; // Modifying property value
// person.age = 31; // Modifying property value

// console.log(person); // Output: { name: 'Jane', age: 31 }

// Golden Rule
// const protects the reference, not the object's contents.