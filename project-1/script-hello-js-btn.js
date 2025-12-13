document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("hello-js-btn")
    const output = document.getElementById("demo-2")

    button.addEventListener("click", () => {
        console.log("Before:", output.textContent);
        output.textContent = "Hello Java Script"
        console.log("After:", output.textContent)
    })
})