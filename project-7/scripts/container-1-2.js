document.addEventListener("DOMContentLoaded", () => {
    const date_now = new Date();
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const date_name = days[date_now.getDay()];
    const hours = date_now.getHours();
    const minutes = date_now.getMinutes();
    const seconds = date_now.getSeconds();

    const date_display = document.getElementById("container-1-date");
    const time_display = document.getElementById("container-1-time");
    const age_entry = document.getElementById("container-2-age");
    const output = document.getElementById("container-2-output");
    const discount_checker = document.getElementById("container-2-discount");

    date_display.textContent = `Date: ${date_name}`;
    time_display.textContent = `Time: ${hours}:${minutes}:${seconds}`;
    //console.log(day_name_number);
    //console.log(date_name_number);

    discount_checker.addEventListener("click", () => {
        const now = new Date();
        const day_name_number = now.getDate();   // 1–31
        const date_name_number = now.getMonth(); // 0–11
        const age = parseInt(age_entry.value, 10);

        console.log("Day:", day_name_number, "Month:", date_name_number, "Age:", age);

        const discount_new_year = (day_name_number === 1 && date_name_number === 0);
        console.log("New Year check:", discount_new_year);

        if (Number.isNaN(age)) {
            console.log("Age is NaN, invalid input");
            output.textContent = "Please enter a valid age.";
        } else if (age <= 6 || age >= 65) {
            console.log("Age discount triggered");
            output.textContent = "You get an age-based discount!";
        } else if (discount_new_year) {
            console.log("New Year discount triggered");
            output.textContent = "Happy New Year! Special discount applied.";
        } else {
            console.log("Else branch triggered");
            output.textContent = "No discount today.";
        }
    });
});