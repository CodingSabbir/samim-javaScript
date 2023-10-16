const greet=(msg ="hello",name ='tamim')=>{
return `${msg} ${name} `;
}
console.log(greet(undefined,'sabbir' ))


const a = 10;
const b = a;
console.log(b);

const firstClassFunc=(num)=>{
  return num +10
}
console.log(firstClassFunc(b))







const calculator=(num1,num2,action=square)=>{
  return action (num1,num2)
}


const sum=(num1,num2)=>{
return num1 + num2
}

const multipuly=(num1,num2)=>{
  return num1 * num2
}

const divaidate=(num1,num2)=>{
  return num1 / num2
}

const square=(num1,num2)=>{
  return num1 ** num2
}

console.log(calculator(3,2,sum))
console.log(calculator(8,2,multipuly))
console.log(calculator(10,2,divaidate))
console.log(calculator(9,2))



// const printName=()=>{
//   const firstName = 'sabbir'
// return  function printLastName(lastName){
//     return firstName+' '+lastName
//   }
// }
// const innerFunc = printName()
// console.log(innerFunc('rahman'))



const printName=(firstName)=>{
return  function printLastName(lastName){
    return firstName+' '+lastName
  }
}
const innerFunc = printName('sabbir')
console.log(innerFunc('rahman'))



const addPluse =(num1)=>{
return  function sum(num2){
    return num1+num2
  }
}
console.log(addPluse(5)(5))



// const addPluse =(num1)=>{
//   return  function sum(num2){
//       return num1+num2
//     }
//   }
//   const result=addPluse(5)
//   console.log(result(5))


