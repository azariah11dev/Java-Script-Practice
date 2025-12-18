document.addEventListener("DOMContentLoaded", () => {
  const display_box = document.getElementById("container-1-display-box");
  const input = document.getElementById("container-1-input");
  const submit_button = document.getElementById("container-1-submit");

  const add_one = document.getElementById("container-1-sub-buttons-add-1");
  const add_two = document.getElementById("container-1-sub-buttons-add-2");
  const minus_one = document.getElementById("container-1-sub-buttons-minus-1");
  const minus_two = document.getElementById("container-1-sub-buttons-minus-2");

  let cart_total = 0; // persistent cart value

  function cart_manager() {
    return parseInt(input.value, 10) || 0;
  }

  submit_button.addEventListener("click", () => {
    cart_total = cart_manager();
    display_box.textContent = cart_total;

    if (cart_total >= 0 && cart_total <= 10) {
      display_box.textContent = cart_total;
    } else if (cart_total > 10) {
      alert("You have too many items");
    } else {
      alert("You can't have negative items");
    }
  });

  add_one.addEventListener("click", () => {
    cart_total += 1;
    display_box.textContent = cart_total;
  });

  add_two.addEventListener("click", () => {
    cart_total += 2;
    display_box.textContent = cart_total;
  });

  minus_one.addEventListener("click", () => {
    cart_total -= 1;
    display_box.textContent = cart_total;
  });

  minus_two.addEventListener("click", () => {
    cart_total -= 2;
    display_box.textContent = cart_total;
  });
});