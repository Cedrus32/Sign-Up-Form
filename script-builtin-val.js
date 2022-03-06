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
// console.log(phone);
let phoneError = document.getElementById('phone-error');
// console.log(phoneError);
let phoneParts = ['', '', ''];

function checkPhone(part) {
    // set values
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
            phoneParts[0] = part.checkValidity();
        } else if (part.id === 'prefix') {
            phoneParts[1] = part.checkValidity();
        } else if (part.id === 'extension') {
            phoneParts[2] = part.checkValidity();
        }
    }
    
    // check part values
    if (isValid === false) {
        part.classList = '';
    } else if ((isValid === true) && (part.value !== '')) {
        part.classList.add('correct');
    } else if (part.value == '') {
        part.classList = '';
    }
    
    // set values
    let anyInput = phoneParts.some(part => part !== '');
    let allPartsValid = phoneParts.every(part => part === true);
    let allPartsNull = phoneParts.every(part => part === '');

    // check phone whole
    if (allPartsNull === true) {
        phone.forEach(part => part.setCustomValidity(''));
        phoneError.textContent = '';
    } else if (anyInput === true) {
        if (allPartsValid === true) {
            phoneError.textContent = '';
        } else {
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

phone.forEach(part => part.addEventListener('focus', () => {
    part.addEventListener('keyup', () => {
        checkPhone(part);
    });
}));

phone.forEach(part => part.addEventListener('blur', () => {
    part.classList = '';
}));
