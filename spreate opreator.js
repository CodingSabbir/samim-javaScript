let items=['sabbir','20','developer']
let city=['dhaka','bogura','feni',...items, true]

console.log(city)



const profile={
    age :22,
    city: 'bogura',
    phone: '123',
    fullData(){
        return `${this.phone} ${this.age} ${this.city}`
    }
}

// const homeProfile={
//     home: 'bogura',
//     ...profile
// };
// console.log(homeProfile);

const homeProfile={
    home: 'bogura',
    ...profile,
    fullData: profile.fullData()
};
console.log(homeProfile);
console.log(homeProfile.fullData)






// const info=(...data)=>{
// console.log(data)
// }
// console.log(info('sabbir',20,'bogura'))



const info=(arguments)=>{
   console.log(arguments)
}

const userData={
    name:'sabbir',
    age:'20',
    city:'Bogura',
} 


info(userData)