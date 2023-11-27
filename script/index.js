// The array of numbers
const numbers = [16, 8, 44, 20, 100];

// a function to find the minimum nuber
function findMin(arr) {
  return Math.min(...arr);
}

// function to find maximum number
function findMax(arr) {
  return Math.max(...arr);
}

// This function displays the minimum number
function displayMin() {
  const minNumber = findMin(numbers);
  document.getElementById('result').innerText = `Minimum number: ${minNumber}`;
}

// displays the maximum number
function displayMax() {
  const maxNumber = findMax(numbers);
  document.getElementById('result').innerText = `Maximum number: ${maxNumber}`;
}

// event listeners to buttons 
document.getElementById('minBtn').addEventListener('click', displayMin);
document.getElementById('maxBtn').addEventListener('click', displayMax);
