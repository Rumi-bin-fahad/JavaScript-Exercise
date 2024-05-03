var dateHeading = document.getElementById('currentDate');
var onlyDate = document.getElementById('OnlyDate');
var OnlyDateFormat = document.getElementById('OnlyDateFormat');
var time = document.getElementById('time');

var now = new Date()
dateHeading.innerHTML = now;

onlyDate.innerText = "Current Date ==> " + now.toDateString();

OnlyDateFormat.innerText = "Format Date ==> " + now.toLocaleDateString();

time.innerText = "Time ==>" + now.toLocaleTimeString();

function Dated(){
    console.log(new Date());
}
console.log('Year ==>' + now.getFullYear());
console.log('Hours ==>' + now.getHours());
console.log('Minutes ==>' + now.getMinutes());
let Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", " Friday", "Saturday"]
console.log("Days ==> " + Days[now.getDay()]);
let Months = ["January", "Febrarury", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
console.log('Months ==> ' + Months[now.getMonth()]);