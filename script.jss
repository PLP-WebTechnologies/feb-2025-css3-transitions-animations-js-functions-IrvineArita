// Check if dark mode is set in localStorage
if (localStorage.getItem('darkMode') === 'true') {
  document.body.classList.add('dark-mode');
}

// Toggle Dark Mode and save preference in localStorage
document.getElementById('themeButton').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  const darkModeEnabled = document.body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', darkModeEnabled);
});

// Trigger animation on button click
document.getElementById('animateButton').addEventListener('click', function() {
  const box = document.getElementById('animatedBox');
  box.classList.add('animate');
  
  // Remove the animation class after the animation ends to allow re-triggering
  box.addEventListener('animationend', function() {
    box.classList.remove('animate');
  });
});
