// function toggleMenu(){
//     const menu=document.querySelector("ham_menu");
//     const icon=document.querySelector("ham_icon");
//     menu.classList.add(toggle("open"));
//     icon.classList.add(toggle("open"));
// }
// function toggleMenu() {
//     const menu = document.querySelector(".ham_menu");
//     const icon = document.querySelector(".ham_icon");
//     menu.classList.toggle("open");
//     icon.classList.toggle("open");
//   }
// jkjl
// Toggle Navbar
// Check if the HTML structure matches
function setupNavbar() {
  var hamIcon = document.querySelector('.ham_icon');
  var hamLink = document.querySelector('.ham_link');
  var navLinks = document.querySelectorAll('.ham_link a');

  // Function to toggle the hamburger menu
  function toggleMenu() {
    hamIcon.classList.toggle('open');
    hamLink.classList.toggle('open');
  }

  // Function to scroll to the target section
  function scrollToSection(event) {
    event.preventDefault();
    var target = event.target.getAttribute('href');
    var section = document.querySelector(target);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      toggleMenu();
    }
  }

  // Attach click event listener to the hamburger icon
  hamIcon.addEventListener('click', toggleMenu);

  // Attach click event listener to each nav link
  navLinks.forEach(function(link) {
    link.addEventListener('click', scrollToSection);
  });
}

// Call the setupNavbar function to initialize the navbar functionality
setupNavbar();