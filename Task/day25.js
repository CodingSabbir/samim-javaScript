/*
Exercise: 2 (3)
Write a function called joinNums which accepts a variable number of parameters (you can assume that each argument to
this function will be an num) and returns an num of all of the parameters concatenated together

Examples:

joinNums([1],[2],[3]) // [1,2,3]
joinNums([1],[2],[3],[1],[2],[3]) // [1,2,3,1,2,3]
joinNums([1,2,3],[4,5,6],[7,8,9]) // [1,2,3,4,5,6,7,8,9]
joinNums([1],[3],[0],[7]) // [1,3,0,7]

*/

function joinNums(...argument ){
let total=[]
for (let element of argument){
total.push(...element)
}
return total
}
const result=joinNums([1],[3],[0],[7])
console.log(result)


/*
Exercise: 3 (4)
Write a function called sumEvenArgs which takes all of the parameters passed to a function and returns the sum of the
even ones.

Examples:
sumEvenArgs(1,2,3,4) // 6
sumEvenArgs(1,2,6) // 8
sumEvenArgs(1,2) // 2
*/

function sumEvenArgs(...args) {
    let sum=0;
    for (let i=0; i<args.length; i++){
        if(args[i] % 2 === 0){
            sum+=args[i]
        }
    }
    return sum
}

console.log(sumEvenArgs(1,2,6))



// Exercise: 4 (4)
// you have given a object with some nested properties and method , you have to access the property and method in single statement(using destructuring)

// Access city, getAddress from the object and console the output - 2
// Get the correct output form by getAddress function calling .Ex: Dhaka-Bangladesh -2


const obj = {
    name: "samim",
    email: "samimfazlu091@gmail.com",
    address: {
      location: {
        country: {
          name: "Bangladesh",
          city: "Dhaka",
        },
      },
      getAddress() {
        return this.country.city + "-" + this.country.name;
      },
    },
  };


const { address:
        { location: 
        { country: { city },
     }, 
     getAddress 
    } 
    } = obj;


  
  console.log(city);
  console.log(getAddress.call(obj.address.location));

//Exercise: 5 (3)
//   you have given a function sum with arr of number as arguments, you have to Sum up those Number and return the result
// // you can check validation before summing up the number

function sum(num) {
if(Array.isArray(num) && num.length > 0) {
return  num.reduce((accumulator,currentValue)=>{
    return accumulator+currentValue
},0)
}
}

console.log(sum([1, 2, 3, 4]))
