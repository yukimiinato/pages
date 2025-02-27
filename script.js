function updateTime() {
    const options = { timeZone: 'Asia/Kolkata', weekday: 'short', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    const now = new Date().toLocaleString('en-IN', options);
    document.getElementById('dateTime').innerHTML = now;
}
setInterval(updateTime, 1000);