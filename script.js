// Get HTML elements
const colorPicker = document.getElementById('colorPicker');
const colorValue = document.getElementById('colorValue');
const preview = document.getElementById('preview');

// Event listener for color picker
colorPicker.addEventListener('input', function() {
  const selectedColor = this.value;
  colorValue.textContent = selectedColor;
  preview.style.backgroundColor = selectedColor;
});
