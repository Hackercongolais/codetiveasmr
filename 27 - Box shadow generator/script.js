const sliderHorizontal = document.querySelector('.slider-horizontal');
const sliderVertical = document.querySelector('.slider-vertical');
const sliderBlur = document.querySelector('.slider-blur');
const sliderSpread = document.querySelector('.slider-spread');

const sliderHorizontalValue = document.querySelector('.horizontal-value');
const sliderVerticalValue = document.querySelector('.vertical-value');
const sliderBlurValue = document.querySelector('.blur-value');
const sliderSpreadValue = document.querySelector('.spread-value');

const colorPicker = document.querySelector('.input-color');
const inputInset = document.querySelector('.input-inset');

const item = document.querySelector('.item');

const cssCode = document.querySelector('.css-code');

let boxShadow = {
    horizontal: 0,
    vertical: 0,
    blur: 10,
    spread: 0,
    color: '#000000',
    inset: false,
}

const generateCSS = () => {
    cssCode.innerHTML = `box-shadow: ${boxShadow.horizontal}px ${boxShadow.vertical}px ${boxShadow.blur}px ${boxShadow.spread}px ${boxShadow.color} ${boxShadow.inset ? 'inset' : ''}`;
};

sliderHorizontal.addEventListener('input', (e) => {
    boxShadow.horizontal = e.target.value;
    sliderHorizontalValue.textContent = e.target.value;
    item.style.boxShadow = `${boxShadow.horizontal}px ${boxShadow.vertical}px ${boxShadow.blur}px ${boxShadow.spread}px ${boxShadow.color}`;
    generateCSS();
});

sliderVertical.addEventListener('input', (e) => {
    boxShadow.vertical = e.target.value;
    sliderVerticalValue.textContent = e.target.value;
    item.style.boxShadow = `${boxShadow.horizontal}px ${boxShadow.vertical}px ${boxShadow.blur}px ${boxShadow.spread}px ${boxShadow.color}`;
    generateCSS();
});

sliderBlur.addEventListener('input', (e) => {
    boxShadow.blur = e.target.value;
    sliderBlurValue.textContent = e.target.value;
    item.style.boxShadow = `${boxShadow.horizontal}px ${boxShadow.vertical}px ${boxShadow.blur}px ${boxShadow.spread}px ${boxShadow.color}`;
    generateCSS();
});

sliderSpread.addEventListener('input', (e) => {
    boxShadow.spread = e.target.value;
    sliderSpreadValue.textContent = e.target.value;
    item.style.boxShadow = `${boxShadow.horizontal}px ${boxShadow.vertical}px ${boxShadow.blur}px ${boxShadow.spread}px ${boxShadow.color}`;
    generateCSS();
});

colorPicker.addEventListener('input', (e) => {
    boxShadow.color = e.target.value;
    item.style.boxShadow = `${boxShadow.horizontal}px ${boxShadow.vertical}px ${boxShadow.blur}px ${boxShadow.spread}px ${boxShadow.color}`;
    generateCSS();
});

inputInset.addEventListener('input', (e) => {
    boxShadow.inset = e.target.checked;
    item.style.boxShadow = `${boxShadow.horizontal}px ${boxShadow.vertical}px ${boxShadow.blur}px ${boxShadow.spread}px ${boxShadow.color} ${boxShadow.inset ? 'inset' : ''}`;
    generateCSS();
});


generateCSS();