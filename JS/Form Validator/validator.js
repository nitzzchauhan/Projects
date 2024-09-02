document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    // Get form elements
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const terms = document.getElementById('terms');

    // Reset errors
    resetErrors();

    let isValid = true;

    // Validate Name
    if (name.value.trim() === '') {
        showError(name, 'nameError', 'Please enter your name.');
        isValid = false;
    } else {
        showValid(name);
    }

    // Validate Email
    if (!isValidEmail(email.value.trim())) {
        showError(email, 'emailError', 'Please enter a valid email.');
        isValid = false;
    } else {
        showValid(email);
    }

    // Validate Password
    if (password.value.trim().length < 6) {
        showError(password, 'passwordError', 'Password must be at least 6 characters long.');
        isValid = false;
    } else {
        showValid(password);
    }

    // Validate Terms and Conditions
    if (!terms.checked) {
        showError(terms, 'termsError', 'You must agree to the terms.');
        isValid = false;
    } else {
        showValid(terms);
    }

    if (isValid) {
        alert('Form submitted successfully!');
        // You can submit the form here, e.g., using AJAX or just `form.submit()`
    }
}

function showError(input, errorId, message) {
    const errorElement = document.getElementById(errorId);
    errorElement.textContent = message;
    errorElement.style.display = 'block';
    input.classList.add('invalid');
    input.classList.remove('valid');
}

function showValid(input) {
    input.classList.remove('invalid');
    input.classList.add('valid');
}

function resetErrors() {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(function(element) {
        element.style.display = 'none';
    });

    const inputs = document.querySelectorAll('input');
    inputs.forEach(function(input) {
        input.classList.remove('invalid');
        input.classList.remove('valid');
    });
}

function isValidEmail(email) {
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
