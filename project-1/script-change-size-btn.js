document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("change-size-btn");
    const output = document.getElementById("demo-1");

    button.addEventListener("click", () => {
        console.log("Before:", output.style.fontSize)
        output.style.fontSize = "40px";
        console.log("After:", output.style.fontSize)
    })
})