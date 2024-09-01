document.querySelectorAll('.plus-btn').forEach(button => {
    button.addEventListener('click', function() {
        let quantityElement = this.previousElementSibling;
        let quantity = parseInt(quantityElement.textContent);
        quantity++;
        quantityElement.textContent = quantity;
        updateTotalPrice();
    });
});

document.querySelectorAll('.minus-btn').forEach(button => {
    button.addEventListener('click', function() {
        let quantityElement = this.nextElementSibling;
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 1) {
            quantity--;
            quantityElement.textContent = quantity;
            updateTotalPrice();
        }
    });
});

document.querySelectorAll('.delete-btn').forEach(button => {
    button.addEventListener('click', function() {
        let cartItem = this.closest('.cart-item');
        cartItem.remove();
        updateTotalPrice();
    });
});

document.querySelectorAll('.like-btn').forEach(button => {
    button.addEventListener('click', function() {
        this.classList.toggle('liked');
    });
});

function updateTotalPrice() {
    let totalPrice = 0;
    document.querySelectorAll('.cart-item').forEach(item => {
        let price = parseFloat(item.querySelector('.item-price').textContent);
        let quantity = parseInt(item.querySelector('.item-quantity').textContent);
        totalPrice += price * quantity;
    });
    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
}
