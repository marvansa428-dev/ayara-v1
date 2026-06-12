
function switchTab(type) {
    const mailSection = document.getElementById('section-mail');
    const telSection = document.getElementById('section-tel');
    const tabs = document.querySelectorAll('.tab-btn');
    const emailInput = document.getElementById('email');
    const telInput = document.getElementById('telephone');

    if (type === 'mail') {
        mailSection.style.display = 'flex';
        telSection.style.display = 'none';
        tabs[0].classList.add('active');
        tabs[1].classList.remove('active');
        emailInput.required = true;
        telInput.required = false;
    } else {
        mailSection.style.display = 'none';
        telSection.style.display = 'flex';
        tabs[0].classList.remove('active');
        tabs[1].classList.add('active');
        emailInput.required = false;
        telInput.required = true;
    }
}

// Afficher ou masquer le mdp

function togglePassword() {
    const input = document.getElementById('passeword');
    const eyeOn = document.getElementById('icon-eye');
    const eyeOff = document.getElementById('icon-eye-off');

    if (input.type === 'password') {
        input.type = 'text';
        eyeOn.style.display = 'block';
        eyeOff.style.display = 'none';
    }
}