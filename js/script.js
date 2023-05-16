// Define the Konami code as an array of keycodes
const konamiCode = [
  38, // up arrow
  38, // up arrow
  40, // down arrow
  40, // down arrow
  37, // left arrow
  39, // right arrow
  37, // left arrow
  39, // right arrow
  66, // B
  65, // A
  13  // enter
];

// Define an array of colors to cycle through
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

// Define a variable to keep track of the index of the Konami code
let konamiCodeIndex = 0;

// Add an event listener to the document to listen for keydown events
document.addEventListener('keydown', function(event) {
  // Check if the key pressed matches the next key in the Konami code
  if (event.keyCode === konamiCode[konamiCodeIndex]) {
    // Increment the Konami code index
    konamiCodeIndex++;
    
    // Check if the entire Konami code has been entered
    if (konamiCodeIndex === konamiCode.length) {
      // Reset the Konami code index
      konamiCodeIndex = 0;
      
      // Set an interval to change the background color every 0.5 seconds
      setInterval(function() {
        const body = document.querySelector('body');
        body.style.backgroundColor = colors[konamiCodeIndex % colors.length];
        konamiCodeIndex++;
      }, 150);
    }
  } else {
    // Reset the Konami code index if the wrong key is pressed
    konamiCodeIndex = 0;
  }
});