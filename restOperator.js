const items=['sabbir','20','developer']
const [firstName,...restValue]=items
console.log(firstName)
console.log(restValue)


const profile={
    age :22,
    city: 'bogura',
    phone: '123',
    fullData(){
        return ` ${this.age} ${this.city} ${this.phone}`
    }
}

const {age,...restValues} =profile 

console.log(age)
console.log(restValues)


// const profile={
//     age :22,
//     city: 'bogura',
//     phone: '123',
//     fullData(){
//         return ` ${this.age} ${this.city} ${this.phone}`
//     }
// }

// const {age,...restValues} =profile 

// console.log(age)
// console.log(restValues.fullData.call(profile))