
/* ================= MENU TOGGLE ================= */
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav a');



/* close menu when a link is clicked (mobile UX) */
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    menuToggle.classList.remove('open');
  });
});

/* ================= ACTIVE SECTION TRACKING ================= */
const sections = document.querySelectorAll('section[id]');

function setActiveLink() {
  let scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 120;
    const sectionId = section.getAttribute('id');

    if (
      scrollY >= sectionTop &&
      scrollY < sectionTop + sectionHeight
    ) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + sectionId) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', setActiveLink);

document.getElementById("websiteForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

      const emailBody = `
Name: ${name}
Email: ${email}
Message: ${message}`;
  // Encode the email subject and body
    const subject = encodeURIComponent("New Website Request");
    const body = encodeURIComponent(emailBody);

    // Create the mailto link
    const mailtoLink = `mailto:kalyangolawrence70@gmail.com?subject=${subject}&body=${body}`;

    // Open the user's email client
    window.location.href = mailtoLink;
});

document.addEventListener('DOMContentLoaded', () => {
  // Social Media Links - open in new tab
  const socialLinks = document.querySelectorAll('.social-links a');
  
  socialLinks.forEach(link => {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener');
  });
  
  // Contact Links - phone, email, WhatsApp
  const contactLinks = document.querySelectorAll('.contact-methods a');
  
  contactLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      // You can add any additional behavior here if needed
      console.log(`Navigating to ${link.href}`);
    });
  });
});

