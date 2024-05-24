document.addEventListener('DOMContentLoaded', () => {
    let total = 0;
    const productButtons = document.querySelectorAll('.btn-primary[data-price]');

    productButtons.forEach(button => {
        button.addEventListener('click', () => {
            const price = parseFloat(button.getAttribute('data-price'));
            total += price;
            continueShopping();
        });
    });

    function continueShopping() {
        const keepShopping = prompt('¿Deseas seguir agregando productos? (si/no)');
        if (keepShopping.toLowerCase() === 'no') {
            processPayment();
        }
    }

    function processPayment() {
        let cardNumber = '';
        while (cardNumber.length !== 16) {
            cardNumber = prompt('Introduce tu número de tarjeta de 16 dígitos:');
            if (cardNumber.length !== 16) {
                alert('Número de tarjeta inválido. Por favor, inténtalo de nuevo.');
            }
        }
        const totalWithTax = total;
        alert(`Tu compra fue exitosa sin descuento debido a que no te has registrado, Total: $${totalWithTax}.`);
    }
});