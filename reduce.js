const numbers=[1,2,3,4,5]
const result=numbers.reduce((total,curr)=>{
  return   total+curr
},10)
console.log(result)


const names=
[{
  "name": "Joey",
  "city": "Bagumbayan",
  "age": 42
}, {
  "name": "Blinny",
  "city": "Tutup",
  "age": 5
}, {
  "name": "Pat",
  "city": "Prawdzinski",
  "age": 5
}, {
  "name": "Marlo",
  "city": "Camias",
  "age": 38
}, {
  "name": "Melisenda",
  "city": "Carrigtwohill",
  "age": 17
}, {
  "name": "Hazel",
  "city": "Haputale",
  "age": 80
}, {
  "name": "Ransell",
  "city": "Postmasburg",
  "age": 21
}, {
  "name": "Consalve",
  "city": "Alcoy",
  "age": 6
}, {
  "name": "Stan",
  "city": "Qijia",
  "age": 33
}, {
  "name": "Hilde",
  "city": "Kafir Yasif",
  "age": 98
}]


const allName=names.reduce((acc,curr)=>{
const name = [...acc,curr.name]
return name
},[])

console.log(allName)




// const name=['sabbir','sakib','sohan','jakir','nahid','sabbir']
// const countName= name.reduce((allName,name)=>{
// if(name in allName){
//   allName[name]=allName[name] + 1
// }else{
// allName[name]=1
// }
// return allName
// },{})
// console.log(countName)


const name=['sabbir','sakib','sohan','jakir','nahid','sabbir']
const countName= name.reduce((allName,name)=>{
allName[name] ??=0
allName[name] ++
return allName
},{})
console.log(countName)


const obj=[
  {
    name:'sabbir',
    age:20,
    city:'bogura',
  },
  {
    name:'sohan',
    age:18,
    city:'bogura',
  },
  {
    name:'sakib',
    age:20,
    city:'dhaka',
  }
]

const groupBy=(objArray,propaty)=>{
 return objArray.reduce((acc,curr)=>{
   const props=curr[propaty]
    if(props in acc){
      acc[props].push(curr)
    }else{
      acc[props]=[curr]
    }
    return acc
  },{})

}

console.log(groupBy(obj,'city'))



function addKeyAndValue(arr, key, value) {
  return   arr.reduce((acc,curr)=>{
     curr[key] = value
         acc.push(curr)
         return acc
 
     },[])
 }
 console.log(addKeyAndValue([{name: 'Samim'}, {name: 'Miraz'}, {name: 'Matt'}, {name: 'Anam'}], 'title', 'instructor'))
 


const product=[
  {
    product: 'T-shirt',
    price:300
  },
  {
    product: 'pant',
    price:1500
  },
  {
    product: 'loofers',
    price:50
  },
  {
    product: 'belt',
    price:80
  },
]

const filterProduct = product.filter((product)=>{
if(product.price > 100){
  return product
}
})
const selProduct=filterProduct.map((product)=>{
 product.price = product.price/2
 return product
})
console.log(selProduct)

const discountProduct= selProduct.reduce((acc, curr,index,arr)=>{
if(index=== arr.length - 1){
  return acc+ curr.product + '-'+curr.price
}else{
  return acc+ curr.product + '-'+curr.price+', '
}

},'discount : ' )
console.log(discountProduct)