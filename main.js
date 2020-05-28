
//ADD 1 POINT
function add (number1, number2) {
    return number1 + number2
}
console.log("ADD (1POINT)")
console.log(add(8,25))



//MULTIPLY 2 POINTS
function multiply (multiplicand, multiplier) {

    let product= 0

    for (let i=1; i<=multiplier; i=i+1){
        product= add(multiplicand, product)       
    }
    return product

}

console.log("MULTIPLY 2 POINTS")
console.log(multiply(4,9))



//POWER/EXPONENTIATION 2 POINTS
function power (base, exponent) {
   
    let powerresult=1

    for (let j=1; j<=exponent; j=j+1){

        powerresult= multiply(powerresult,base)
    }

 return powerresult 
}


console.log("POWER/EXPONENT 2 P0INTS")
console.log (power(4,3))



//FACTORIAL 2 POINTS
function factorial (num) {
    
    let factanswer = 1

    for (let z=num; z>=1; z=z-1 ){
    factanswer=multiply(factanswer,z) 
    }
    return  factanswer
}


console.log("FACTORIAL 2 P0INTS")

console.log (factorial (5))




