const names=['sabbir','sohan','jakir','sakib','sabbir']
names.find((name)=>{
if(name == 'sabbir'){
    console.log(name)
}
})

const arr=[1,2,3,4,5,6,7,8,9]
const result =arr.find((num)=>{
 if(num % 2 === 0){
    return num
 }   

})
console.log(result)




const numbers=[1,2,3,4,5,6,7,8,9]
const sum =numbers.findIndex((num)=>{
 if(num % 2 === 0){
    return num
 }   

})
console.log(sum)