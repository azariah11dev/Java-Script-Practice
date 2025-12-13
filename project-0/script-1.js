document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("hello-btn");
    const output = document.getElementById("output");

    button.addEventListener("click", () => {
        console.log("Before:", output.textContent)
        output.textContent = "Hello World!";
        console.log("After:", output.textContent);
    })
})