// Get HTML elements
const colorInput = document.getElementById('colorInput');
const colorDisplay = document.getElementById('colorDisplay');
const hexCode = document.getElementById('hexCode');
const rgbCode = document.getElementById('rgbCode');

// Initialize the color picker with the default color
updateColor();

// Listen for color changes from the color input
colorInput.addEventListener('input', updateColor);

// Function to update the color display and codes
function updateColor() {
    // Get the selected color in hex format
    const hexColor = colorInput.value;

    // Update the display box with the selected color
    colorDisplay.style.backgroundColor = hexColor;

    // Update the hex code display
    hexCode.textContent = hexColor.toUpperCase();

    // Convert hex to RGB and update the RGB code display
    const rgbColor = hexToRgb(hexColor);
    rgbCode.textContent = `rgb(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b})`;
}

// Function to convert hex color to RGB format
function hexToRgb(hex) {
    // Remove the '#' symbol if present
    hex = hex.replace('#', '');

    // Convert hex to RGB
    const r = parseInt(hex.substring(0, 2), 16);  // Red value
    const g = parseInt(hex.substring(2, 4), 16);  // Green value
    const b = parseInt(hex.substring(4, 6), 16);  // Blue value

    return { r, g, b };
}

// Function to pick a preset color
function pickColor(color) {
    // Set the color input to the selected color
    colorInput.value = color;

    // Update the display
    updateColor();
}

// Function to copy text to clipboard
function copyToClipboard(elementId) {
    // Get the text content to copy
    const element = document.getElementById(elementId);
    const text = element.textContent;

    // Copy to clipboard using the modern API
    navigator.clipboard.writeText(text).then(() => {
        // Show a brief confirmation message
        const button = event.target;
        const originalText = button.textContent;

        button.textContent = 'Copied!';
        button.style.backgroundColor = '#28a745';

        // Reset button after 2 seconds
        setTimeout(() => {
            button.textContent = originalText;
            button.style.backgroundColor = '#667eea';
        }, 2000);
    }).catch(() => {
        // Fallback for older browsers
        alert('Failed to copy: ' + text);
    });
}
