// const printProfile=(name,age,city)=>{
// return `${name} ${age} ${city}`   

// }
// console.log(printProfile('sabbir',20,'bogura'))


// const printProfile=({name,age,city})=>{
//     return `${name} ${age} ${city}` 
    
// }
// const profile={
//     name: 'sabbir',
//     age: 20,
//     city: 'bogura'
// }
// console.log(printProfile(profile))




const printProfile=({name,...restValue})=>{
    console.log(restValue)
    return `${name} ${restValue.age} ${restValue.city}` 
    
}
const profile={
    name: 'sabbir',
    age: 20,
    city: 'bogura'
}
console.log(printProfile(profile))