const names=['sabbir','sohan','jakir','sakib','sabbir']
const match=names.filter((name)=>{
if(name == 'sabbir'){
  return name
}
})
console.log(match)



const arr=[1,2,3,4,5,6,7,8,9]
const result =arr.filter((num)=>{
 if(num % 2 === 0){
    return num
 }   

})
console.log(result)