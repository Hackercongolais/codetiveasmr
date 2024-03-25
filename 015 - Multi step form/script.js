const circles = document.querySelectorAll('.circle');
const forms = document.querySelectorAll('.form');
const btnNext = document.querySelector('.btn-next');
const btnPrev = document.querySelector('.btn-prev');
const btnConfirm = document.querySelector('.btn-confirm');

const addonCheckboxes = document.querySelectorAll('.container-addon input[type="checkbox"]');
const planButtons = document.querySelectorAll('.btn-plan');
const summaryPlanTitle = document.querySelector('.summary-container .summary-title');
const summaryPlanPrice = document.querySelector('.summary-container .summary-price');
const summaryAddons = document.querySelector('.summary-addons');
const totalSum = document.querySelector('.total-sum');

let currentPage = 1;

let selectedPlan = 'Arcade';

// 2 ciecia
// 1 uciac debugging na poczatku html i css z background progress

// 2 poczatek jsa przy pisaniu updateUI pokazalem adobe premiere pro

// 3 premiere pro gdy pisalem update summary for each

// 4 koncowka z bugiem

const updateUI = () => {
    circles.forEach((circle, index) => {
        if (index + 1 === currentPage) {
            circle.classList.add('circle-active');
        } else {
            circle.classList.remove('circle-active');
        }
    });

    forms.forEach((form, index) => {
        if (index + 1 === currentPage) {
            form.classList.remove('hidden');
        } else {
            form.classList.add('hidden');
        }
    }); 

    btnPrev.disabled = currentPage === 1;
    btnNext.style.display = currentPage === 4 ? 'none' : 'block';
    btnConfirm.style.display = currentPage === 4 ? 'block' : 'none';
}

let selectedAddons = [];

// Update selected plan
planButtons.forEach(button => {
    button.addEventListener('click', () => {
        selectedPlan = button.querySelector('.plan-name').textContent;
        planButtons.forEach(btn => btn.classList.remove('btn-active'));
        button.classList.add('btn-active');
    });
});

addonCheckboxes.forEach((checkbox, index) => {
    checkbox.addEventListener('change', (event) => {
        if (event.target.checked) {
            selectedAddons.push({
                name: document.querySelectorAll('.addon-content .plan-name')[index].textContent,
                price: document.querySelectorAll('.addon-price')[index].textContent
            });
        } else {
            selectedAddons = selectedAddons.filter(addon => addon.name !== document.querySelectorAll('.addon-content .addon-name')[index].textContent);
        }
    });
});

const updateSummary = () => {
    summaryPlanTitle.textContent = selectedPlan;
    summaryPlanPrice.textContent = document.querySelector(`#${selectedPlan.toLowerCase()} .plan-price`).textContent;


    summaryAddons.innerHTML = '';

    let total = parseFloat(summaryPlanPrice.textContent.replace(/[^0-9.]/g, ''));
    selectedAddons.forEach(addon => {
        const addonRow = document.createElement('div');
        addonRow.classList.add('summary-row');
        addonRow.innerHTML = `<div class="summary-title">${addon.name}</div><div class="summary-price">${addon.price}</div>`;
        summaryAddons.appendChild(addonRow);

        const priceValue = addon.price.match(/[\d\.]+/);

        if (priceValue) {
            const priceNumber = parseFloat(priceValue[0]);
            total += priceNumber;
        }
    
    });

    totalSum.textContent = `$${Math.floor(total)}/mo`;
};


btnNext.addEventListener('click', () => {
    if (currentPage < 4) {
        currentPage++;
        updateUI();
    }

    if (currentPage === 4) {
        updateSummary();
    }
});


btnPrev.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        updateUI();
    }
});

document.addEventListener('DOMContentLoaded', updateUI);
