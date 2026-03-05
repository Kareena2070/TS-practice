// 1️⃣ An arrow function calculateTotal
        // price: number
        // quantity: number
        // return number
const calculateTotal = (price: number, quantity: number):number =>{
    return price*quantity
}
console.log(calculateTotal(300, 9))

// 2️⃣ An arrow function isEligibleForDiscount
    // totalAmount: number
    // return boolean
    // eligible if totalAmount > 1000
const isEligibleForDiscount = (totalAmount:number):boolean =>{
    if(totalAmount >1000){
        return true
    }else{
        return false
    }
}

console.log(isEligibleForDiscount(3000))


// 3️⃣ Define function type separately:
    // type Operation = (a: number, b: number) => number;
    // Then create an arrow function subtract using that type.
type Operation = (a: number, b: number) => number;

// const subtract = ({a, b}:Operation): number =>{
//     return a-b
// }
const subtract: Operation = (a, b) => {
    return a-b
}

console.log(subtract(200, 90))