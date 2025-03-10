for(let i = 1; i <= 12; i++) { 
    const num = document.createElement("div")  
    num.classList.add('number')
    const span = document.createElement("span")
    span.textContent = i;
    num.appendChild(span)
    num.style.setProperty("--rotation", `${i * 30}deg`)
    document.querySelector(".clock").appendChild(num)
}


function clockTimer() {
    const digitalClock = document.querySelector(".digital-clock")
    const now = new Date()
    const hour = (now.getHours()) % 12
    const minute = now.getMinutes()
    const second = now.getSeconds()

    const newHour = hour.toString().padStart(2, "0")
    const newMinute = minute.toString().padStart(2, "0")
    const newSecond = second.toString().padStart(2, "0")
    digitalClock.textContent = `${newHour}:${newMinute}:${newSecond}`

    const secondDeg = second * 6;
    const minuteDeg = minute * 6;
    const hourDeg = (hour * 30) + (minute / 2);

    document.querySelector(".hour").style.transform = `rotate(${hourDeg}deg)`
    document.querySelector(".minute").style.transform = `rotate(${minuteDeg}deg)`
    document.querySelector(".second").style.transform = `rotate(${secondDeg}deg)`
}
clockTimer()
setInterval(clockTimer, 1000)
