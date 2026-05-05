let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');
let ampm = document.getElementById('ampm');

function displayTime() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let period = hh >= 12 ? 'PM' : 'AM';
    hh = hh % 12 || 12;

    hr.innerHTML = String(hh).padStart(2, '0');
    min.innerHTML = String(mm).padStart(2, '0');
    sec.innerHTML = String(ss).padStart(2, '0');
    ampm.innerHTML = period;
}

displayTime();
setInterval(displayTime, 1000);
