document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("change-text-btn")
    const output = document.getElementById("demo-1")

    button.addEventListener("click", () => {
        console.log("Before:", output.textContent)
        output.textContent = "Hello Java Script"
        console.log("After", output.textContent)
    })
})