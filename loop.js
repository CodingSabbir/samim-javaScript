const array = ['a', 'b', 'c']

const result =(latter)=>{
    let concatenated = ''
    for(let word of latter){
        // console.log(word)
        concatenated+=word + " "
    }
   return concatenated
}
console.log(result(array))

