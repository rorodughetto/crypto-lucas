document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    alert(`Merci, ${name}! Votre message a été envoyé.\nEmail: ${email}\nMessage: ${message}`);
});
