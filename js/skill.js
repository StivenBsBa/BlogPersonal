// Habilidades y porcentajes
const skillsMap = new Map([
  ['HTML y CSS', 80],
  ['React', 90],
  ['Node.js', 40],
  ['Javascript', 60],
  ['Java', 40],
  ['Python', 60]
]);

// Obtener el contenedor de la lista de habilidades
const skillsListContainer = document.getElementById('skillsList');

// Generar la lista de habilidades dinámicamente
skillsMap.forEach((percentage, skill) => {
  const skillElement = document.createElement('div');
  skillElement.classList.add('skill');

  const skillNameElement = document.createElement('h6');
  skillNameElement.textContent = skill;

  const progressBarElement = document.createElement('div');
  progressBarElement.classList.add('progress-bar');

  const progressElement = document.createElement('div');
  progressElement.classList.add('progress');
  progressElement.textContent = `${percentage}%`;
  progressElement.style.width = `${percentage}%`;

  progressBarElement.appendChild(progressElement);
  skillElement.appendChild(skillNameElement);
  skillElement.appendChild(progressBarElement);
  skillsListContainer.appendChild(skillElement);
});


document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
  });

  const navItems = document.querySelectorAll('.nav-links li a');

  navItems.forEach(item => {
    item.addEventListener('click', function() {
      navLinks.classList.remove('active');
      menuToggle.classList.remove('active');
    });
  });
});
