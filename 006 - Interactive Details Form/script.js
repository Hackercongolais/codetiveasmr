const cardHolderInput = document.querySelector('.input-name');
const numberInput = document.querySelector('.input-number');
const mmInput = document.querySelector('.input-MM');
const yyInput = document.querySelector('.input-YY');
const cvcInput = document.querySelector('.input-cvc');

const cardHolder = document.querySelector('.card-name');
const cardNumber = document.querySelector('.card-number');
const cardExpiry = document.querySelector('.card-expiry');
const cardCVC = document.querySelector('.card-cvc');

cardHolderInput.addEventListener('input', (e) => {
    cardHolder.textContent = e.target.value;
    }
);

numberInput.addEventListener('input', (e) => {
    let cardNumberValue = e.target.value.replace(/\s/g, '');
    cardNumberValue = cardNumberValue.replace(/(\d{4})/g, '$1 '); // Add a space every 4 digits
    cardNumber.textContent = cardNumberValue;
});
mmInput.addEventListener('input', (e) => {
    const mm = e.target.value;
    const yy = yyInput.value;
    cardExpiry.textContent = mm + '/' + yy;
});

yyInput.addEventListener('input', (e) => {
    const mm = mmInput.value;
    const yy = e.target.value;
    cardExpiry.textContent = mm + '/' + yy;
});

cvcInput.addEventListener('input', (e) => {
    cardCVC.textContent = e.target.value;
    }
);