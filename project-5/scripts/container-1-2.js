document.addEventListener("DOMContentLoaded", () => {
    const player = document.getElementById("container-1-player");
    const computer = document.getElementById("container-1-computer");
    const result = document.getElementById("score");

    const rock = document.getElementById("container-2-rock");
    const scissors = document.getElementById("container-2-scissors");
    const paper = document.getElementById("container-2-paper");
    const confirm = document.getElementById("container-2-confirm");

    rock.addEventListener("click", () => {
        player.textContent = "✊";
    });

    scissors.addEventListener("click", () => {
        player.textContent = "✌️";
    });

    paper.addEventListener("click", () => {
        player.textContent = "✋";
    });

    function computer_choice() {
        const options = ["✋","✌️","✊"];
        const random_index = Math.floor(Math.random() * options.length);
        return options[random_index];
    };

    confirm.addEventListener("click", () => {
        const comp_choice = computer_choice();
        computer.textContent = comp_choice;
        const player_choice = player.textContent;

        if (player_choice === comp_choice) {
            result.textContent = "DRAW";
        }
        else if (
            (comp_choice === "✋" && player_choice === "✌️") ||
            (comp_choice === "✌️" && player_choice === "✊") ||
            (comp_choice === "✊" && player_choice === "✋")
        ) {
            result.textContent = "Player Wins";
        }
        else {
            result.textContent = "Computer Wins";
        }
    });
});