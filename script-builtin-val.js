// --------------- //
// CHECK FUNCTIONS //
// --------------- //

// ---- NAME ---- //

let firstName = document.getElementById('first-name');
let lastName = document.getElementById('last-name');
function checkName(nameSpace) {
    // set values
    let isValid = nameSpace.checkValidity();
    let nameLabel;
    let nameError;
    if (nameSpace.id === 'first-name') {
        nameLabel = document.querySelector('label.first-name.required');
        nameError = document.getElementById('first-name-error');
    } else if (nameSpace.id == 'last-name') {
        nameLabel = document.querySelector('label.last-name.required');
        nameError = document.getElementById('last-name-error');
    }

    // clear previous error message
    nameLabel.classList.remove('hide');
    nameSpace.classList = '';
    nameError.textContent = '';

    // check valus
    if ((isValid === false) && (nameSpace.value !== '')) {
        nameError.textContent = "* Name can include letters, spaces, and the special characters  ' -";
    } else if ((isValid === true) && (nameSpace.value !== '')) {
        nameLabel.classList.add('hide');
        nameSpace.classList.add('correct');
    }
}

// ---- EMAIL ---- //

let email = document.getElementById('email');
let emailError = document.getElementById('email-error');
function checkEmail() {
    // set values
    let isValid = email.checkValidity();
    let emailLabel = document.querySelector('label.email.required');
    let emailError = document.getElementById('email');

    // clear previous error message
    email.classList = '';
    emailLabel.classList.remove('hide');
    emailError.textContent = '';

    // check valus
    if ((isValid === false) ** (email.value !== '')) {
        emailError.textContent = '* Please enter valid email address';
    } else if ((isValid === true) && (email.value !== '')) {
        emailLabel.classList.add('hide');
        email.classList.add('correct');
    }
}

// --------------- //
// LISTENER EVENTS //
// --------------- //

// ---- NAME ---- //

firstName.addEventListener('focus', () => {
    firstName.addEventListener('keyup', () => {
        checkName(firstName);
    });
});

firstName.addEventListener('blur', () => {
    firstName.classList = '';
});

lastName.addEventListener('focus', () => {
    lastName.addEventListener('keyup', () => {
        checkName(lastName);
    });
});

lastName.addEventListener('blur', () => {
    lastName.classList = '';
});

// ---- CONTACT ---- //

email.addEventListener('focus', () => {
    email.addEventListener('keyup', () => {
        checkEmail();
    });
});

email.addEventListener('blur', () => {
    email.classList = '';
});

phone.addEventListener('focus', () => {
    phone.addEventListener('keyup', () => {
        checkPhone();
    });
});
