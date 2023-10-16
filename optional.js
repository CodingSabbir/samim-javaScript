const obj={
    name: 'sabbir',
    address:{
        city:{
            road:12
        }
    },
}

const options=obj.address.city
console.log(options)

const result = obj.address?.city?.road
console.log(result)

if (result){
    console.log(result)
}