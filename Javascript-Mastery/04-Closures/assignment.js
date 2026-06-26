// Q1 : 

function outer() {
    let count = 0;
    return function(){
        count++;
        console.log(count);
    }
}
const counter = outer();
counter();
counter();
counter();

// output : 1 2 3

// Q2 :
function outer(){
    let message = "Hello";
    return function(){
        console.log(message);
    }
}
const greet = outer();
greet(); 

// output : Hello

// Q3 : 
function createBankAccount() {

    let balance = 1000;
    return {
        deposit(amount) {
            balance += amount;
        },
        checkBalance() {
            console.log(balance);
        }
    };
}
const account = createBankAccount();

// can we access balance directly? 
// No, we cannot access balance directly because it is a private variable defined within the closure of the createBankAccount function. We can only interact with it through the methods provided in the returned object (deposit and checkBalance).

// Q4 : What is Closure ? 

//  Its a function that remembers the variable from the outer Function even if the outer function has been closed or executed.
