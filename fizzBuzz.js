/* Write a function that takes in a number and returns one of the following:
        - If the number is divisible by 3, return 'Fizz'.
        - If the number is divisible by 5, return 'Buzz'.
        - If the number is divisible by 3 and 5, return 'FizzBuzz'
        - Else, return the number passed as an argument */

const fizzBuzz = {
    divide(a) {
        if(a % 3 === 0 && a % 5 === 0){
            return 'FizzBuzz';
        }else if (a % 3 === 0){
            return 'Fizz';
        }else if (a % 5 === 0){
            return 'Buzz';
        }else {
            return a;
        }
    }
}

module.exports = fizzBuzz;
