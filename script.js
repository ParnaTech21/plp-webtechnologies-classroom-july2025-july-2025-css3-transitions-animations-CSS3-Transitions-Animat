// ------------------------------
// Part 2: JavaScript Functions
// ------------------------------

// Global variable for demonstration
let globalCount = 0;

// Function that takes parameters and returns a value
function addNumbers(a, b) {
  // Local scope variables
  let sum = a + b;
  return sum;
}

// Function demonstrating local vs global scope
function incrementGlobalCount() {
  globalCount += 1;
  return globalCount;
}

function showFunctionDemo() {
  // Call addNumbers with parameters
  const result1 = addNumbers(5, 7);

  // Call incrementGlobalCount, demonstrating global scope
  const result2 = incrementGlobalCount();

  // Local scope example
  function localScopeDemo() {
    let message = "I'm local!";
    return message;
  }
  const result3 = localScopeDemo();

  // Display the results
  document.getElementById('function-result').innerHTML =
    `<strong>Function Results:</strong><br>
     addNumbers(5,7): ${result1}<br>
     incrementGlobalCount(): ${result2}<br>
     localScopeDemo(): ${result3}`;
}

// ------------------------------
// Part 3: JS Triggering CSS Animations
// ------------------------------

// Animate box on button click
const animateBoxBtn = document.getElementById('animate-box-btn');
const animatedBox = document.getElementById('animated-box');

animateBoxBtn.addEventListener('click', function() {
  // Add 'animated' class to trigger keyframes
  animatedBox.classList.add('animated');

  // Remove animation class after animation ends so it can be triggered again
  animatedBox.addEventListener('animationend', function handler() {
    animatedBox.classList.remove('animated');
    animatedBox.removeEventListener('animationend', handler);
  });
});

// Show/hide modal with animations
const showModalBtn = document.getElementById('show-modal-btn');
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('close-modal-btn');

// Function to show modal
function showModal() {
  modal.classList.remove('hide');
  modal.classList.add('show');
}

// Function to hide modal
function hideModal() {
  modal.classList.remove('show');
  modal.classList.add('hide');
  // After animation, hide modal completely
  modal.addEventListener('animationend', function handler() {
    modal.style.display = 'none';
    modal.classList.remove('hide');
    modal.removeEventListener('animationend', handler);
  });
}

// Event listeners for modal
showModalBtn.addEventListener('click', function() {
  modal.style.display = 'flex';
  showModal();
});

closeModalBtn.addEventListener('click', function() {
  hideModal();
});

// Optional: Close modal when clicking outside modal-content
modal.addEventListener('click', function(e) {
  if (e.target === modal) {
    hideModal();
  }
});

/*
-------------------------------------
    Assignment Comments
-------------------------------------
- Part 1: All CSS transitions and animations are labeled above for buttons, boxes, and balls.
- Part 2: Functions use parameters, return values, and scope (see addNumbers, incrementGlobalCount, localScopeDemo).
- Part 3: JS triggers CSS animations by adding/removing classes (box pop, modal slide/fade).
- Code is modular, clear, and commented for learning!
*/