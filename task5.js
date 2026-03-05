//1.  A function calculateDiscount
// price: number
// discount?: number
// return 
// If discount not provided → assume 10%
function calculateDiscount(price, discount) {
    if (discount) {
        return (price - discount);
    }
    else {
        return (price);
    }
}
console.log(calculateDiscount(40, 10));
function formatValue(a) {
    if (typeof a === 'number') {
        return ("".concat(calculateDiscount(a), " \u20B9 ").concat(a, " "));
    }
    if (typeof a === 'string') {
        return ("\u20B9 ".concat(a.toUpperCase()));
    }
    throw new Error('Invalid input type');
}
console.log(formatValue(10));
