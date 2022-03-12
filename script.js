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

    // check values
    if ((isValid === false) && (nameSpace.value !== '')) {
        nameError.textContent = "* Please provide a valid name";
    } else if ((isValid === true) && (nameSpace.value !== '')) {
        nameLabel.classList.add('hide');
        nameSpace.classList.add('correct');
    }
}

// ---- EMAIL ---- //

let email = document.getElementById('email');
let emailError = document.getElementById('email-error');
let emailLabel = document.querySelector('label.email.required');
function checkEmail() {
    // set values
    let isValid = email.checkValidity();

    // clear previous error message
    email.classList = '';
    emailLabel.classList.remove('hide');
    emailError.textContent = '';

    // check values
    if ((isValid === false) && (email.value !== '')) {
        emailError.textContent = '* Please enter valid email address';
    } else if ((isValid === true) && (email.value !== '')) {
        emailLabel.classList.add('hide');
        email.classList.add('correct');
    }
}

// ---- PHONE ---- //

let phone = document.querySelectorAll('div.phone input');
let phoneError = document.getElementById('phone-error');
let phoneLabel = document.querySelector('label.optional');
let phoneParts = ['', '', ''];

function checkPhone(part) {
    // set part values
    let isValid = part.checkValidity();

    // fill phone parts
    if (part.value === '') {
        if (part.id === 'area-code') {
            phoneParts[0] = '';
        } else if (part.id === 'prefix') {
            phoneParts[1] = '';
        } else if (part.id === 'extension') {
            phoneParts[2] = '';
        }
    } else if (part.value !== '') {
        if (part.id === 'area-code') {
            phoneParts[0] = isValid;
        } else if (part.id === 'prefix') {
            phoneParts[1] = isValid;
        } else if (part.id === 'extension') {
            phoneParts[2] = isValid;
        }
    }
    
    // check part values
    if (isValid === false) {
        part.classList = '';
    } else if ((isValid === true) && (part.value !== '')) {
        part.classList.add('correct');
    } else if (part.value === '') {
        part.classList = '';
    }
    
    // set whole values
    let allPartsNull = phoneParts.every(part => part === '');
    let anyInput = phoneParts.some(part => part !== '');
    let allPartsValid = phoneParts.every(part => part === true);

    // check whole phone
    if (allPartsNull === true) {
        phoneLabel.classList.remove('hide');
        phone.forEach(part => part.setCustomValidity(''));
        phoneError.textContent = '';
    } else if (anyInput === true) {
        if (allPartsValid === true) {
            phoneLabel.classList.add('hide');
            phoneError.textContent = '';
        } else {
            phoneLabel.classList.remove('hide');
            for (let i = 0; i < 3; i++) {
                if (phoneParts[i] === '') {
                    phone[i].setCustomValidity('* Please provide valid phone number');
                } else {
                    phone[i].setCustomValidity('');
                }
            }
            phoneError.textContent = '* Please provide valid phone number';
        }
    }
}

// ---- PASSWORD ---- //

//todo add option to view password
//todo add popup to check pw meets criteria (8-15, appropriate characters)

let passwords = document.querySelectorAll('fieldset.password input');
let pw1 = passwords[0];
let pw2 = passwords[1];
let passwordErrors = document.querySelectorAll('fieldset.password div.error-box');
let pw1Error = passwordErrors[0];
let pw2Error = passwordErrors[1];
let passwordLabels = document.querySelectorAll('fieldset.password label.required');
let pw1Label = passwordLabels[0];
let pw2Label = passwordLabels[1];
let pws = ['', ''];


function checkPW(password) {
    // set values
    pw2.setCustomValidity('');
    let isValid = password.checkValidity();

    // fill pws
    if (password === '') {
        if (password.id === 'pw') {
            pws[0] = '';
        } else if (password.id === 'pw-confirm') {
            pws[1] = '';
        }
    } else if (password !== '') {
        if (password.id === 'pw') {
            pws[0] = isValid;
        } else if (password.id === 'pw-confirm') {
            pws[1] = isValid;
        }
    }

    // check pw
    if (password.id === 'pw') {
        // clear previous error
        pw1.classList = '';
        pw1Label.classList.remove('hide');
        pw1Error.textContent = '';

        // confirm values
        if ((pws[0] === true) && (pw1.value !== '')) {
            pw1Label.classList.add('hide');
            pw1.classList.add('correct');
        } else if ((pws[0] === false) && (pw1.value !== '')) {
            pw1Error.textContent = '* Password can include letters, numbers, and special characters  !  @  #  $  %  ^  &  *  (  )';
        }
    }

    // confirm pw

    if (pw1.value === pw2.value) {
        if (pws[1] === false) {
            pw2Error.textContent = '* Please confirm valid password';
        } else if (pws[1] === true) {
            pw2Error.textContent = '';
            pw2Label.classList.add('hide');
            pw2.classList.add('correct');
        }
    } else if (pw1.value !== pw2.value) {
        pw2.classList = '';
        pw2Label.classList.remove('hide');
        if (pws[1] === true) {
            pw2.setCustomValidity('* Passwords do not match');
            pw2Error.textContent = '* Passwords do not match'
        } else if (pws[1] === false) {
            pw2Error.textContent = '* Passwords do not match'
        }
    }
}

let pwView = document.querySelector('span.view-unview');
let viewImage = document.querySelector('span img');
console.log(pwView);
console.log(viewImage);
function pwToggle() {
    if (pw1.type === 'password') {
        passwords.forEach(password => password.type = 'text');
        viewImage.setAttribute('src', './assets/visible.png');
        viewImage.classList = 'visible';

        console.log(passwords.forEach(password => password.type));
        console.log(viewImage);
        console.log(viewImage.classList);

    } else if (pw1.type === 'text') {
        passwords.forEach(password => password.type = 'password');
        viewImage.setAttribute('src', './assets/invisible.png');
        viewImage.classList = 'invisible';
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

lastName.addEventListener('focus', () => {
    lastName.addEventListener('keyup', () => {
        checkName(lastName);
    });
});

// ---- CONTACT ---- //

email.addEventListener('focus', () => {
    email.addEventListener('keyup', () => {
        checkEmail();
    });
});

phone.forEach(part => part.addEventListener('focus', () => {
    part.addEventListener('keyup', () => {
        checkPhone(part);
    });
}));

// ---- PASSWORD ---- //

passwords.forEach(password => password.addEventListener('focus', () => {
    password.addEventListener('keyup', () => {
        checkPW(password);
    });
}));

pwView.addEventListener('click', pwToggle);