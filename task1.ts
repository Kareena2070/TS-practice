// 1. A function multiply that takes two numbers and returns number.

function multiply(a:number, b:number):number{
    return a*b;
}
console.log(multiply(5, 10))

// 2. A function greetUser that takes:
    // name (string)
    // isAdmin (boolean)
    // returns string

function greetUser(name:string, isAdmin:boolean):string{
    if(isAdmin){
        return `welcome admin ${name}`
    } else{
        return `welcome ${name}`
    }
}

console.log(greetUser('Kareena', true))

//3.  Create an object type for:
    // Restaurant
    // name: string
    // rating: number
    // isOpen: boolean

type Restaurant = {
    name : string;
    rating: number;
    isOpen: boolean;
}
