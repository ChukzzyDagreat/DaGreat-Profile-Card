// Example: Simple interactivity with vanilla JavaScript
/*const profileCard = document.querySelector('[data-test="profile-card"]');
profileCard.addEventListener("click", () => {
  alert("You clicked on the profile card!");
});*/

// Navigation functionality for social links
const btn = document.querySelector('.custom_btn');

btn.addEventListener('click', () => {
  console.log('Clicked with mouse');
});

btn.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    console.log('Activated with keyboard');
    // do the same action as click
    e.preventDefault();
  }
});


// Profile card section navigation functionality
const buttons = document.querySelectorAll('.card_buttons button');
const sections = document.querySelectorAll('.card_section');
const card = document.querySelector('.card');

const handleButtonClick = (e) => {
  const targetSection = e.target.getAttribute('data-section');
  const section = document.querySelector(targetSection);
  
//  use the ternary condition to check the condition

  targetSection !== "#about"
  ? card.classList.add('is_active')
  : card.classList.remove('is_active');

  card.setAttribute('data-state', targetSection);
  //  remove the active section
  sections.forEach((s) => s.classList.remove('is_active'));
  // remove the active button
  buttons.forEach((b) => b.classList.remove('is_active'));

  // add the target section to button as active on click
  e.target.classList.add('is_active');
  section.classList.add('is_active');
};

// add listener event for all the buttons
buttons.forEach((btn) => {
  btn.addEventListener('click', handleButtonClick);
});

//footer current year display
document.getElementById('year').textContent = new Date().getFullYear();