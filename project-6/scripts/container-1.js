document.addEventListener("DOMContentLoaded", () => {
    const date_now = new Date();
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const day_name = days[date_now.getDay()];
    const hours = date_now.getHours();
    const minutes = date_now.getMinutes();
    const seconds = date_now.getSeconds();

    const day_date = document.getElementById("day");
    const time = document.getElementById("time");
    const check_event = document.getElementById("check-event");
    const greetings = document.getElementById("greetings");

    day_date.textContent = `Current date: ${day_name}`;
    time.textContent = `time: ${hours}:${minutes}:${seconds}`;

    check_event.addEventListener("click", () => {
        if (hours >= 6 && hours <= 10) {
            document.body.style.backgroundColor = "lightyellow";
            greetings.textContent = "Good Morning 🌇";
        }
        else if (hours >= 11 && hours <= 4) {
            document.body.style.backgroundColor = "lightblue";
            greetings.textContent = "Good Afternoon 🏙️";
        }
        else {
            document.body.style.backgroundColor = "orange";
            greetings.textContent = "Good Night 🌉";
        }
    });
});