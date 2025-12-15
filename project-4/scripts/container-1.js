document.addEventListener("DOMContentLoaded", () => {
    const output = document.getElementById("container-1-output");
    const mood = document.getElementById("container-1-mood");
    const set_mood = document.getElementById("container-1-set-mood");

    set_mood.addEventListener("click", () => {
        const value = mood.value;

        if (value === "happy") {
            document.body.style.backgroundColor = "lightyellow";
            output.textContent = "Stay Possitive 😁";
        }
        else if (value === "sad") {
            document.body.style.backgroundColor = "lightgrey";
            output.textContent = "Cheer Up thing will get better 🥲";
        }
        else if (value === "angry") {
            document.body.style.backgroundColor = "salmon";
            output.textContent = "Cool off and come back later 😡";
        }
        else if (value === "annoyed") {
            document.body.style.backgroundColor = "lightpink";
            output.textContent = "Well remember things can always be worse 😖";
        }
        else if (value === "excited") {
            document.body.style.backgroundColor = "orange";
            output.textContent = "Well looks like something is going right 🫡"
        }
        else if (value === "tired") {
            document.body.style.backgroundColor = "grey";
            output.textContent = "Rest up tomorrow is a new day 🥴";
        }
        else {
            document.body.style.backgroundColor = "white";
            output.textContent = "You didn't select a mood 😔";
        }
    });
});