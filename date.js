// const date=new Date()
// console.log(date)
// console.log(date.toISOString())
// console.log(date.toUTCString())
// console.log(date.toString())
// console.log(date.toLocaleDateString())
// console.log(date.toLocaleTimeString())
// console.log(date.toDateString())

// console.log(date.getFullYear())
// console.log(date.getMonth() + 1)
// console.log(date.getDate())
// console.log(date.getHours())
// console.log(date.getMinutes())
// console.log(date.getSeconds())
// console.log(date.getMilliseconds())
// console.log(date.getTime())


// set the  default date format for the calendar 

// const date=new Date()
// date.setFullYear(2020)
// date.setMonth(0)
// date.setDate(1-31)
// date.setHours(0)
// console.log(date)

// clock project 
const clock=()=>{
    const date=new Date()
    let hours=date.getHours()
    let minutes=date.getMinutes()
    let seconds=date.getSeconds()
    hours= hours > 12 ? hours-12 : hours
    formateHours = hours >= 10 ? hours : "0"+ hours
    formateMinutes = minutes >= 10 ? minutes : "0"+ minutes
    formateSeconds = seconds >= 10 ? seconds : "0"+ seconds
    return `${formateHours} : ${formateMinutes} : ${formateSeconds}`
}
// console.log(clock())

setTimeout(()=>{
    console.log(clock())
}, 1000)


const timer =setInterval(()=>{
console.log(clock())
},1000)
//setinterval k stop korar jonno clearInterval
clearInterval(timer)