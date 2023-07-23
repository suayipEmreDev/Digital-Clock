
let hour = document.querySelector('#hour')
let min = document.querySelector('#minute')
let sec = document.querySelector('#second')
let date = document.querySelector('#date')


let getDate = () => {
    let dt = new Date()
    let hours = dt.getHours()
    let minute = dt.getMinutes()
    let second = dt.getSeconds()
    let fullYear = dt.toLocaleDateString()

    if (hours < 10)
        hours = "0" + hours
    if (minute < 10)
        minute = "0" + minute
    if (second < 10)
        second = "0" + second

    hour.textContent = hours
    min.textContent = minute
    sec.textContent = second
    date.textContent = fullYear

    console.log(typeof hour)
}
setInterval(getDate, 1000)





