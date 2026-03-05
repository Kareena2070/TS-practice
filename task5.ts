
//1.  A function calculateDiscount
    // price: number
    // discount?: number
    // return 
    // If discount not provided → assume 10%
function calculateDiscount(price: number, discount?: number): number{
    if(discount){
        return(price-discount)
    }else{
        return(price)
    }
}
console.log(calculateDiscount(40, 10))


//2.  A function formatValue
    // If input is number → return string with ₹ prefix
    // If input is string → return uppercase\
    // Use function overloads

function formatValue(a: number):string;
function formatValue(a: string):string;


function formatValue(a:number | string):string{
    if(typeof a === 'number'){
        return(`${calculateDiscount(a)} ₹ ${a} `)
    }
    if(typeof a === 'string'){
        return(`₹ ${a.toUpperCase()}`)
    }
    throw new Error('Invalid input type')
}

console.log(formatValue(10))