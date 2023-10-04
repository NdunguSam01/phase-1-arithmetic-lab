// Write your code here
const multiply=(num1, num2)=>
{
    return num1*=num2
}

//Generating a random integer between 1 and 10
let random=Math.floor(Math.random() * 10) + 1;

//Math.floor returns the value of an integer rounded down to its nearest integer
//Math.random generates a random number betweeen o and 1 (including decimals)
//Using Math.floor and Math.random together is used to generate random integers

let mod=(num3, num4) =>
{
    if(Number.isInteger(num3) && Number.isInteger(num4))
    {
        return num3%=num4
    }
}

let max=Math.max(1,7,9,20)  //Math.max returns the highest number in a given dataset