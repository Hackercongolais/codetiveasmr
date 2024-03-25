const pickerA = document.getElementById("color-a");
const pickerB = document.getElementById("color-b");
const hexTextA = document.getElementById("hexTextA");
const hexTextB = document.getElementById("hexTextB");
const directionInput = document.getElementById("direction-input");
const generate = document.getElementById("generate");
const percentageA = document.getElementById("range-a");
const percentageB = document.getElementById("range-b");
const directions = document.querySelectorAll(".direction");


hexTextA.textContent = pickerA.value;
hexTextB.textContent = pickerB.value;

function updateGradient() {
    const dir = directionInput.textContent;
    const colorStart = hexTextA.textContent;
    const colorEnd = hexTextB.textContent;
    const percentageStart = parseInt(percentageA.value, 10);
    const percentageEnd = parseInt(percentageB.value, 10);
    document.body.style.background = `linear-gradient(to ${dir}, ${colorStart} ${percentageStart}%, ${colorEnd} ${percentageEnd}%)`;
}

directions.forEach(button => {
    button.addEventListener("click", (event) => {
        directionInput.textContent = button.value;
        updateGradient();
    });
});


[pickerA, pickerB].forEach(picker => {
    picker.addEventListener("input", () => {
        hexTextA.textContent = pickerA.value;
        hexTextB.textContent = pickerB.value;
        updateGradient();
    });
});


[percentageA, percentageB].forEach(range => {
    range.addEventListener("input", updateGradient);
});


generate.addEventListener("click", () => {
    generate.textContent = "Copied! 🥳";
    setTimeout(() => { generate.textContent = "Copy Code"; }, 1300);
    const code = `background: linear-gradient(to ${directionInput.textContent}, ${hexTextA.textContent} ${parseInt(percentageA.value, 10)}%, ${hexTextB.textContent} ${parseInt(percentageB.value, 10)}%);`;
    navigator.clipboard.writeText(code).then(() => {
      console.log("Code copied to clipboard");
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
});
