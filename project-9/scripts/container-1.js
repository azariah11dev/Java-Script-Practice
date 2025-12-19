document.addEventListener("DOMContentLoaded", () => {
    const computer_score = document.getElementById("container-1-computer-score");
    const player_score = document.getElementById("container-1-player-score");
    const computer_display = document.getElementById("container-1-sub-computer");
    const player_display = document.getElementById("container-1-sub-player");
    const result_display = document.getElementById("container-1-sub-result");

    /* player move */
    const rock = document.getElementById("container-1-sub-buttons-rock");
    const paper = document.getElementById("container-1-sub-buttons-paper");
    const scissors = document.getElementById("container-1-sub-buttons-scissors");
    const submit = document.getElementById("container-1-sub-buttons-submit");
    const reset = document.getElementById("container-1-sub-buttons-reset-score");

    function computer_move() {
        const computer_move = ["✋","✌️","✊"];
        const random_move = Math.floor(Math.random() * computer_move.length);
        return computer_move[random_move];
    }

    function reset_board() {
        return (player_display.textContent = "",
        computer_display.textContent = "",
        result_display.textContent = "");
    };

    computer_display.textContent = computer_move();

    let score = {
        "player" : 0,
        "computer" : 0
    };

    computer_score.textContent = `Computer Score: ${score.computer}`;
    player_score.textContent = `Player Score: ${score.player}`;

    rock.addEventListener("click", () => {
        player_display.textContent = "✊";
    });

    paper.addEventListener("click", () => {
        player_display.textContent = "✋";
    });

    scissors.addEventListener("click", () => {
        player_display.textContent = "✌️";
    });

    reset.addEventListener("click", () => {
        score.player = 0;
        score.computer = 0;
        player_score.textContent = `Player Score: ${score.player}`;
        computer_score.textContent = `Computer Score: ${score.computer}`;
        result_display.textContent = "";
        player_display.textContent = "";
        computer_display.textContent = "";
    });

    submit.addEventListener("click", () => {
        let computer = computer_move();
        computer_display.textContent = computer;
        let player = player_display.textContent;

        if (player === computer) {
            result_display.textContent = `computer: ${computer_display.textContent} player: ${player_display.textContent} = Tie`;
        }
        else if (
            (player === "✊" && computer === "✌️") || 
            (player === "✋" && computer === "✊") ||
            (player === "✌️" && computer === "✋")
        ) {
        result_display.textContent = `computer: ${computer_display.textContent} player: ${player_display.textContent} = Player Wins`;
        score.player += 1;
        }
        else {
            result_display.textContent = `computer: ${computer_display.textContent} player: ${player_display.textContent} = Computer Wins`;
            score.computer += 1;
        }

        player_score.textContent = `Player Score: ${score.player}`;
        computer_score.textContent = `Computer Score: ${score.computer}`;

        setTimeout(() => {
            reset_board();
        }, 1500);
    });
});