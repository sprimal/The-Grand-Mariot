function calculateTotal() {
    let itemTotal = 0;
    const checkboxes = document.querySelectorAll('.menu-checkbox');

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            itemTotal += parseFloat(checkbox.dataset.price);
        }
    });

    let tax = itemTotal * 0.13;
    let totalWithTax = itemTotal + tax;

    document.getElementById('item-total').textContent = itemTotal.toFixed(2);
    document.getElementById('tax-amount').textContent = tax.toFixed(2);
    document.getElementById('total-with-tax').textContent = totalWithTax.toFixed(2);
}