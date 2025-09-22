
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
