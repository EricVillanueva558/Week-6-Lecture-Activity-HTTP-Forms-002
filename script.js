// Get a reference to the form element by its ID
const form = document.getElementById('onePieceForm');

// Get a reference to the text input field for the favorite character
const characterInput = document.getElementById('favCharacter');

// Get a reference to the color input field for the theme color
const colorInput = document.getElementById('themeColor');

// Check if any saved preferences exist when the page loads
window.addEventListener('DOMContentLoaded', () => {
  // Retrieve saved character name from localStorage
  const savedCharacter = localStorage.getItem('favOnePieceCharacter');
  // Retrieve saved theme color from localStorage
  const savedColor = localStorage.getItem('themeColor');

  // If a character name is saved, log it to the console and set it in the input field
  if (savedCharacter) {
    console.log(`Previously saved character: ${savedCharacter}`);
    characterInput.value = savedCharacter; // Pre-fill the character input
  }

  // If a color is saved, log it to the console and set it in the color input field
  if (savedColor) {
    console.log(`Previously selected theme color: ${savedColor}`);
    colorInput.value = savedColor; // Pre-fill the color input
  }
});

// Add an event listener to the form that runs on submission
form.addEventListener('submit', (event) => {
  // Prevent the form from submitting and refreshing the page
  event.preventDefault();

  // Get the current value of the character input field
  const character = characterInput.value;
  // Get the current value of the color input field
  const color = colorInput.value;

  // Log the entered character and selected color to the console
  console.log(`Favorite One Piece character: ${character}`);
  console.log(`Selected theme color: ${color}`);

  // Save the character name and theme color to localStorage
  localStorage.setItem('favOnePieceCharacter', character);
  localStorage.setItem('themeColor', color);
});
