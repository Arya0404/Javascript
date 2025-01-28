// Reference to the display element
const display = document.getElementById("display");

// Append characters to the display
function appendToDisplay(value) {
    if (display.value === "Error") display.value = ""; // Clear error if present
    display.value += value; // Add the clicked value to the display
}

// Clear the display
function clearDisplay() {
    display.value = ""; // Reset the display to an empty string
}

// Calculate the result
function calculate() {
    try {
        // Evaluate the mathematical expression in the display
        const result = eval(display.value); // Dangerous if input is untrusted
        display.value = isNaN(result) ? "Error" : result; // Handle invalid results
    } catch (error) {
        display.value = "Error"; // Display "Error" if evaluation fails
    }
}

// Handle keyboard input for convenience
document.addEventListener("keydown", (event) => {
    const validKeys = "0123456789+-*/.()";
    const key = event.key;

    if (validKeys.includes(key)) {
        appendToDisplay(key); // Append valid keys to the display
    } else if (key === "Enter") {
        calculate(); // Calculate when Enter is pressed
    } else if (key === "Backspace") {
        display.value = display.value.slice(0, -1); // Remove the last character
    } else if (key === "Escape") {
        clearDisplay(); // Clear the display when Escape is pressed
    }
});
