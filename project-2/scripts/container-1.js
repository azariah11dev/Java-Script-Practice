document.addEventListener("DOMContentLoaded", () => {
    let cart_quantity = 0;
    const result_box = document.getElementById("result");

    const show_quantity = document.getElementById("container-1-button-show-quantity");
    const add_cart = document.getElementById("container-1-button-add-cart");
    const add_two = document.getElementById("container-1-button-add-two");
    const add_three = document.getElementById("container-1-button-add-three");
    const cart_reset = document.getElementById("container-1-button-cart-reset");

    function update_display() {
        result_box.textContent = `Cart Quantity: ${cart_quantity}`;
    };

    show_quantity.addEventListener("click", () => {
        console.log(`Cart Quantity: ${cart_quantity}`);
        update_display();
        console.log(`Cart Quantity: ${cart_quantity}`);
    });

    add_cart.addEventListener("click", () => {
        console.log(`Cart Quantity: ${cart_quantity}`);
        cart_quantity += 1;
        update_display();
        console.log(`Cart Quantity: ${cart_quantity}`);
    });

    add_two.addEventListener("click", () => {
        console.log(`Cart Quantity: ${cart_quantity}`);
        cart_quantity += 2;
        update_display();
        console.log(`Cart Quantity: ${cart_quantity}`);
    });

    add_three.addEventListener("click", () => {
        console.log(`Cart Quantity: ${cart_quantity}`);
        cart_quantity += 3;
        update_display();
        console.log(`Cart Quantity: ${cart_quantity}`);
    });

    cart_reset.addEventListener("click", () => {
        console.log(`Cart Quantity: ${cart_quantity}`);
        cart_quantity = 0;
        update_display();
        console.log(`Cart Quantity: ${cart_quantity}`);
    });
});