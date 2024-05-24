document.addEventListener('DOMContentLoaded', () => {
    let total = 0;
    const productButtons = document.querySelectorAll('.btn-custom[data-price]');

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
        const totalWithTax = total * .70;
        alert(`Tu compra fue exitosa con el 30% por un total de $${totalWithTax}. y la instalación es GRATIS`);
    }
});
