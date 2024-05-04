const hour = document.getElementById('hour');
const minutes = document.getElementById('Minutes');
const second = document.getElementById('Second');
const day = document.getElementById('days');

let monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const clock = setInterval(function (){
    let today = new Date();
    // console.log(today)
    let d = today.getDate();
    // console.log(m);
    let m = today.getMonth();
    let y = today.getFullYear();
    let h = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
     
    days.innerText = `${d} ${monthName[m]} ${y}`
    hour.textContent = h;
    minutes.innerText = min;
    second.innerText = sec;
    
})
