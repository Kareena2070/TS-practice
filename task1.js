// 1. A function multiply that takes two numbers and returns number.
function multiply(a, b) {
    return a * b;
}
console.log(multiply(5, 10));
// 2. A function greetUser that takes:
// name (string)
// isAdmin (boolean)
// returns string
function greetUser(name, isAdmin) {
    if (isAdmin) {
        return "welcome admin ".concat(name);
    }
    else {
        return "welcome ".concat(name);
    }
}
console.log(greetUser('Kareena', true));

