// 1️⃣ An arrow function calculateTotal
// price: number
// quantity: number
// return number
var calculateTotal = function (price, quantity) {
    return price * quantity;
};
console.log(calculateTotal(300, 9));
// 2️⃣ An arrow function isEligibleForDiscount
// totalAmount: number
// return boolean
// eligible if totalAmount > 1000
var isEligibleForDiscount = function (totalAmount) {
    if (totalAmount > 1000) {
        return true;
    }
    else {
        return false;
    }
};
console.log(isEligibleForDiscount(3000));
// const subtract = ({a, b}:Operation): number =>{
//     return a-b
// }
var subtract = function (a, b) {
    return a - b;
};
console.log(subtract(200, 90));
