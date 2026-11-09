const buttonChange = document.getElementById("buttonChangeColor");
const buttonRandom = document.getElementById("buttonRandomColor");
const colorSlider = document.getElementById("colorSlider");
const colorBox = document.querySelector(".box");

// Helper function to return the current HSL value based on the slider position
function getCurrentHSL() {
    return `hsl(${colorSlider.value}, 100%, 50%)`;
}

// 1. Dynamic Scroll: Change the main page background instantly as you drag the slider
colorSlider.addEventListener("input", function() {
    document.body.style.backgroundColor = getCurrentHSL();
});

// 2. Change Color Button: Now transfers the background color into the small box
buttonChange.addEventListener("click", function() {
    colorBox.style.backgroundColor = getCurrentHSL();
});

// 3. Random Button: Instantly assigns a random color directly to the background and moves the slider
buttonRandom.addEventListener("click", function() {
    const randomHue = Math.floor(Math.random() * 361);
    
    // Move slider handle visually
    colorSlider.value = randomHue;

    // Apply color instantly to the background (the box stays untouched until "Change color" is pressed)
    document.body.style.backgroundColor = `hsl(${randomHue}, 100%, 50%)`;
});
