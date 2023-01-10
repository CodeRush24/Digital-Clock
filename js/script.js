let hrs = document.getElementById('hrs')
let min = document.getElementById('min')
let sec = document.getElementById('sec')
let AMPM = document.getElementById('ampm')

let clock = document.getElementById('clock')

setInterval(() => {
    let d = new Date()
    var hours = d.getHours()
    let minutes = d.getMinutes()
    let seconds = d.getSeconds()

    if (hours > 12) {
        hours = hours - 12;
      }
      if (hours < 10) {
        hours = "0" + hours;
      }
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      if (hours == 0) {
        hours = 12;
      }
      if (hours < 12) {
        AMPM.innerHTML = "PM";
      } else {
        AMPM.innerHTML = "AM";
      }

    hrs.innerHTML = `${hours}`
    min.innerHTML = `${minutes}`
    sec.innerHTML = `${seconds}`
})
