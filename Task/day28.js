//Use Array helper methods as possible as you can
/*
Exercise-1:(2)
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

Examples:
    valTimesIndex([1,2,3]) // [0,2,6]
    valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/

function valTimesIndex(arr) {
return arr.map((val,i)=>val*i)

}   

console.log(valTimesIndex([1,2,3]))  // [0,2,6]
console.log(valTimesIndex([1,-2,-3])) // [0,-2,-6]  



/*
Exercise-2:(2)
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and filter to double and then filter the odd numbers).

Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/

function doubleOddNumbers(arr) {
  return arr.filter(ele => ele % 2 !== 0).map(val=> val * 2);

 }

console.log(doubleOddNumbers([1,2,3,4,5]))
console.log(   doubleOddNumbers([4,4,4,4,4]))

/*
Exercise-6:(2)
Write a function called hasOnlyOddNumbers which accepts an array and returns true if every single number in the array is odd. If any of the values in the array are not odd, the function should return false. 

Examples:
    hasOnlyOddNumbers([1,3,5,7]) // true
    hasOnlyOddNumbers([1,2,3,5,7]) // false
*/

function hasOnlyOddNumbers(arr){
return    arr.every((number)=>{
    if(number % 2 !== 0){
        return number
    }
    })

}

console.log(hasOnlyOddNumbers([1,3,5,7]))
console.log(hasOnlyOddNumbers([1,2,3,5,7]))

  
/*
Exercise-4:(2)
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 

Examples:
    addKeyAndValue([{name: 'Samim'}, {name: 'Miraz'}, {name: 'Matt'}, {name: 'Anam'}], 'title', 'instructor') 
    
    // [{name: 'Samim', title:'instructor'}, {name: 'Miraz', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Anam', title:'instructor'}]

*/
function addKeyAndValue(arr, key, value) {
 return   arr.reduce((acc,curr)=>{
    curr[key] = value
        acc.push(curr)
        return acc

    },[])
}
console.log(addKeyAndValue([{name: 'Samim'}, {name: 'Miraz'}, {name: 'Matt'}, {name: 'Anam'}], 'title', 'instructor'))


/*
Exercise-8:(2)
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.

Examples:
    findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Samim', last:"Hasan", isCatOwner: false}], 'isCatOwner', true) // {first: 'Tim', last:"Garcia", isCatOwner: true}
*/

function findInObj(arr, key, searchValue) {
return   arr.find((item)=>{
   return item[key] == searchValue
   })
}
console.log(findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Samim', last:"Hasan", isCatOwner: false}], 'isCatOwner', true)) // {first: 'Tim', last:"Garcia", isCatOwner: true}



/*
Exercise-9:(2)
Write a function called hasCertainValue which accepts an array of objects and a key, and a value, and returns true if every single object in the array contains that value for the specific key. Otherwise it should return false.

Examples:
   
    hasCertainValue(arr,'title','Instructor') // true
    hasCertainValue(arr,'first','Elie') // false
    
*/

var arr = [
    {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
    {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
    {title: "Instructor", first: 'Matt', last:"Lane"}, 
    {title: "Instructor", first: 'Anam', last:"Ahmed", isCatOwner: true}
]

function hasCertainValue(arr, key, searchValue) {
return arr.every((elments)=>{
  return  elments[key] == searchValue
})
}
console.log(hasCertainValue(arr,'title','Instructor'))
console.log(hasCertainValue(arr,'first','Elie'))



/*
Bonus Exercise - Number won't be counted
Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of each object at the key.

Examples:
    var arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Max'}]
    extractValue(arr,'name') // ['Elie', 'Tim', 'Matt', 'Max']
*/
var arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Max'}]
function extractValue(arr, key) {
return arr.reduce((acc,curr)=>{
    curr[key] 
   acc.push(curr.name)
   return acc
},[])
}
console.log(extractValue(arr,'name') )

