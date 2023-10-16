// const profile={
//     firstNmae: 'sabbir',
//     age :22,
//     city: 'bogura',
//     phone: '123',
//     fullData(){
//         return `${this.firstNmae} ${this.age} ${this.city}`
//     }
// }
// const {firstNmae,age,city,phone,fullData}=profile
// console.log(firstNmae,age,city,phone,fullData.call(profile))

// const profile={
//     age :22,
//     city: 'bogura',
//     phone: '123',
//     fullData(){
//         return `${this.phone} ${this.age} ${this.city}`
//     }
// }
// const {firstNmae ='anis',age,city,phone,fullData}=profile
// console.log(firstNmae,age,city,phone,fullData.call(profile))


const profile={
    age :22,
    city: 'bogura',
    phone: '123',
    fullData(){
        return `${this.phone} ${this.age} ${this.city}`
    }
}
console.log(profile.fullData.call(profile))


// const sum=(num1)=>{
//  return   function add(num2){
//         return num1+num2
//     }
// }
// const innerFun=sum(5)
// console.log(innerFun(5))

const sum=(num1)=>{
    return   function add(num2){
           return num1+num2
       }
   }
   console.log(sum(5)(8))
