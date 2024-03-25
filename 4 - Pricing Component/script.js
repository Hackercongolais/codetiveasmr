const slider = document.querySelector(".slider");
const sliderViews = document.querySelector(".slider-value-views");
const sliderValue = document.querySelector(".slider-value-cash");

// Update the slider value display
sliderValue.innerHTML = `$${slider.value / 10}.00 <span>/ month</span>`;

slider.addEventListener("input", function() {
    sliderViews.innerHTML = `${slider.value === '1000' ? "1M" : slider.value + 'K'} pageviews`;
    sliderValue.innerHTML = `$${slider.value}.00 <span>/ month</span>`;
});
