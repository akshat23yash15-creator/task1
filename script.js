
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contact-form');
  if (!contactForm) {
    console.error('Contact form not found. Make sure #contact-form exists.');
    return;
  }

  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();


    const submitBtn = contactForm.querySelector('button[type="submit"]');
    if (submitBtn) submitBtn.disabled = true;

    emailjs.sendForm('service_69cb0lk', 'template_im6gyhk', this)
      .then(function(response) {
        alert('Message sent successfully!');
        contactForm.reset();
        if (submitBtn) submitBtn.disabled = false;
        console.log('EmailJS response:', response);
      }, function(error) {
        console.error('Failed to send message:', error);
        alert('Oops! Something went wrong. Check console for details.');
        if (submitBtn) submitBtn.disabled = false;
      });
  });
});

const themeBtn = document.getElementById('theme-btn');
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.body.classList.add(savedTheme);
  themeBtn.textContent = savedTheme === 'light-theme' ? '🌙 Theme' : '☀️ Theme';
}

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');  

  
  if (document.body.classList.contains('light-theme')) {
    themeBtn.textContent = '☀️ Theme';
    localStorage.setItem('theme', 'light-theme');
  } else {
    themeBtn.textContent = '🌙 Theme';
    localStorage.setItem('theme', '');
  }
});

const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinkItems = document.querySelectorAll('.nav-links a');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

navLinkItems.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});
