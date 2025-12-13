document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("hide-text-btn");
    const output = document.getElementById("demo-1");

    button.addEventListener("click", () => {
        console.log("Before:", output.style.display);
        output.style.display = "none";
        console.log("After:", output.style.display);
    })
})