var textElement = document.getElementById("myText");
var texts = [
  "I'm a Web Developer",
]; // Array of different texts
var currentIndex = 0; // Index of the current text
var currentText = texts[currentIndex]; // Current text being typed
var charIndex = 0; // Index of the current character

function updateText() {
  if (charIndex < currentText.length) {
    textElement.textContent += currentText.charAt(charIndex);
    charIndex++;
  } else {
    currentIndex = (currentIndex + 1) % texts.length; // Move to the next text
    currentText = texts[currentIndex]; // Update the current text
    charIndex = 0; // Reset the character index
    textElement.textContent = ""; // Clear the text element
  }
}

setInterval(updateText, 100); // Update text every 100 milliseconds