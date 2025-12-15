document.addEventListener("DOMContentLoaded", () => {
    let initial_value = 0;
    const output = document.getElementById("output");

    const increment_one = document.getElementById("increment-1");
    const increment_two = document.getElementById("increment-2");
    const increment_three = document.getElementById("increment-3");
    const decrement_one = document.getElementById("decrement-1");
    const decrement_two = document.getElementById("decrement-2");
    const decrement_three = document.getElementById("decrement-3");

    function style_format() {
        output.textContent = `Count: ${initial_value}`;
    };

    increment_one.addEventListener("click", () => {
        initial_value += 1;
        style_format();
    });

    increment_two.addEventListener("click", () => {
        initial_value += 2;
        style_format();
    });

    increment_three.addEventListener("click", () => {
        initial_value += 3;
        style_format();
    });

    decrement_one.addEventListener("click", () => {
        initial_value -= 1;
        style_format();
    });

    decrement_two.addEventListener("click", () => {
        initial_value -= 2;
        style_format();
    });

    decrement_three.addEventListener("click", () => {
        initial_value -= 3;
        style_format();
    });
});