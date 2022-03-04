// -------------- //
// CHECK FUNCTION //
// -------------- //

function checkForm() {
    checkName(firstName, firstNameError);
    checkName(lastName, lastNameError);
    checkEmail();
    checkPhone();
    checkPassword();
    checkPasswordConfirm();
}

let firstName = document.getElementById('first-name');
let lastName = document.getElementById('last-name');
let firstNameError = document.getElementById('first-name-error');
let lastNameError = document.getElementById('last-name-error');
function checkName(nameSpace, nameSpaceError) {
    // get values
    let name = nameSpace;
    let nameValue = name.value;
    const alphaRegex = /^[A-Z]([ '-]?[a-zA-Z])*$/;
    let nameTest = alphaRegex.test(nameValue);
    let nameError = nameSpaceError;

    //clear previous error messages
    name.classList = '';
    nameError.textContent = '';

    // check value
    if (nameValue.length <= 30) {
        if (nameValue === '') {
            name.classList.add('error');
            if (nameSpace.id === 'first-name') {
                nameError.textContent = '* Please Enter Your First Name';
            } else if (nameSpace.id === 'last-name') {
                nameError.textContent = '* Please Enter Your Last Name';
            }
        } else if (nameTest === false) {
            name.classList.add('error');
            nameError.textContent = "* Name can include letters, spaces, and the special characters  ' -";
        } else if (nameTest === true) {
            name.classList.add('correct');
        }
    } else if (nameValue.length > 30) {
        name.classList.add('error');
        nameError.textContent = '* Exceeds Maximum Character Count'
    }
}

let email = document.getElementById('email');
let emailError = document.getElementById('email-error');
function checkEmail() {
    // get value
    let emailValue = email.value;
    const emailRegex = /^[a-zA-Z0-9]+([._-]?[a-zA-Z0-9]+)*@[a-z0-9]+([._-]?[a-zA-Z0-9]+)*.[a-z]{2,}$/;
    let emailTest = emailRegex.test(emailValue);

    // clear previous error message
    email.classList = '';
    emailError.textContent = '';

    // check value
    if (emailValue.length <= 30) {
        switch (true) {
            case (emailValue === ''):
                email.classList.add('error');
                emailError.textContent = '* Please Enter Email Address';
                break;
            case (emailTest === false):
                email.classList.add('error');
                emailError.textContent = '* Please Enter Valid Email Address';
                break;
            case (emailTest === true):
                email.classList.add('correct');
        }
    } else if (emailValue.length > 30) {
        email.classList.add('error');
        emailError.textContent = '* Exceeds Maximum Character Count';
    }
}

let phone = document.getElementById('phone');
let phoneError = document.getElementById('phone-error');
function checkPhone() {
    //get value
    let phoneValue = phone.value;
    const phoneRegex = /\d{3}[\-]\d{3}[\-]\d{4}/;
    let phoneTest = phoneRegex.test(phoneValue);

    // clear previous error message
    phone.classList = '';
    phoneError.textContent = '';

    // check value
    switch (true) {
        case (phoneValue === ''):
            phone.classList.add('error');
            phoneError.textContent = '* Please Enter Phone Number';
            break;
        case (phoneTest === false):
            phone.classList.add('error');
            phoneError.textContent = '* Please Enter Valid Phone Number';
            break;
        case (phoneTest === true):
            phone.classList.add('correct');
    }
}


let pw1 = document.getElementById('pw');
let pw1Error = document.getElementById('pw-error');
function checkPassword () {
    // get values
    let pw1Value = pw1.value;
    const pwRegex = /[a-zA-Z0-9!@#$%^&*()]{8,30}/;
    let pw1Test = pwRegex.test(pw1Value);

    // clear previous error messages
    pw1.classList = ''
    pw1Error.textContent = '';

    // check value
    if (pw1Test === false) {
        pw1.classList.add('error');
        if (pw1Value === '') {
            pw1Error.textContent = '* Please Enter Password'
        } else if (0 < pw1Value.length < 8) {
            pw1Error.textContent = '* Password too short. Must be at least 8 characters.'
        } else if (pw1Value.legnth > 30) {
            pw1Error.textContent = '* Password too long. Must be 30 characters or less.'
        } else {
            pw1Error.textContent = '* Please use valid characters. Password can be letters, numbers, and the special characters  ! @ # $ % ^ & * ( )'
        }
    } else if (pw1Test === true) {
        pw1.classList.add('correct');
    }
}

let pw2 = document.getElementById('pw-confirm');
let pw2Error = document.getElementById('pw-confirm-error');
function checkPasswordConfirm() {
    // get values
    let pw2Value = pw2.value;
    let pw1Value = pw1.value;

    // clear previous error messages
    pw2.classList = '';
    pw2Error.textContent = '';

    // compare value
    if (pw2Value === '') {
        pw2.classList.add('error');
        pw2Error.textContent = '* Please Confirm Password';
    } else if (pw2Value !== pw1Value) {
        pw2.classList.add('error');
        pw2Error.textContent = '* Password does not match. Please confirm password.'
    } else if (pw2Value === pw1Value) {
        pw2.classList.add('correct');
    }
}

// --------- //
// RUN CHECK //
// --------- //

firstName.addEventListener('blur', () => {
    checkName(firstName, firstNameError);
});

lastName.addEventListener('blur', () => {
    checkName(lastName, lastNameError);
});

email.addEventListener('blur', checkEmail);

phone.addEventListener('blur', checkPhone);

pw1.addEventListener('blur', checkPassword);

pw2.addEventListener('blur', checkPasswordConfirm);

const button = document.querySelector('button');
button.addEventListener('click', checkForm);
