// -------------- //
// CHECK FUNCTION //
// -------------- //

function checkForm() {
    checkName();
    checkContact();
    checkPassword();
}

function checkName() {
    // get values
    let fullName = document.querySelectorAll('fieldset.name input');
    let fullNameErrorBoxes = document.querySelectorAll('fieldset.name div.error-box');
    const alphaRegex = /^[A-Z][a-z '-]?[a-z]{1,30}$/;

    // clear previous error messages
    for (let i = 0; i <= 1; i++) {
        let name = fullName[i];
        let nameError = fullNameErrorBoxes[i];
        name.classList = '';
        nameError.textContent = '';
    }

    // check values
    for (let i = 0; i <= 1; i++) {
        let name = fullName[i];
        let nameValue = name.value;
        let nameTest = alphaRegex.test(nameValue);
        let nameError = fullNameErrorBoxes[i];

        if (nameValue === '') {
            name.classList.add('error');
            if (i === 0) {
                nameError.textContent = '* Please Enter Your First Name';
            } else if (i === 1) {
                nameError.textContent = '* Please Enter Your Last Name';
            }
        } else if (nameTest === false) {
            name.classList.add('error');
            if (i === 0) {
                nameError.textContent = '* Please Enter Your First Name';
            } else if (i === 1) {
                nameError.textContent = '* Please Enter Your Last Name';
            }
        } else if (nameTest === true) {
            name.classList.add('correct');
        }
    }
}

//TODO add hint for appropriate phone number && email

function checkContact () {
    checkEmail();
    checkPhone();
}

function checkPhone() {
    //get value
    let phone = document.getElementById('phone');
    let phoneValue = phone.value;
    const phoneRegex = /\d{3}[\-]\d{3}[\-]\d{4}/;
    let phoneTest = phoneRegex.test(phoneValue);
    let phoneError = document.getElementById('phone-error');


    // clear previous error message
    phone.classList = '';
    phoneError.textContent = '';

    // check value
    switch (true) {
        case (phoneValue === ''):
            phone.classList.add('error');
            phoneError.textContent = '* Please Enter Your Phone Number';
            break;
        case (phoneTest === false):
            phone.classList.add('error');
            phoneError.textContent = '* Please Enter A Valid Phone Number';
            break;
        case (phoneTest === true):
            phone.classList.add('correct');
    }
}

function checkPassword () {
    // get values
    let pw1 = document.getElementById('pw');
    let pw2 = document.getElementById('pw-confirm');
    let pw1Value = pw1.value;
    let pw2Value = pw2.value;
    const pw1ErrorBox = document.getElementById('pw-error');
    const pw2ErrorBox = document.getElementById('pw-confirm-error');

    // clear previous error messages
    pw1.classList = '';
    pw2.classList = '';
    pw1ErrorBox.textContent = '';
    pw2ErrorBox.textContent = '';

    // compare values
    switch (true) {
        case (pw1Value === ''):
            pw1.classList.add('error');
            pw2.classList.add('error');
            pw1ErrorBox.textContent = '* Please Enter Password'
            break;
        case (pw2Value === ''):
            pw2.classList.add('error');
            pw2ErrorBox.textContent = '* Please Confirm Password'
            break;
        case ((pw1Value !== pw2Value) && (pw1Value !== '') && (pw2Value !== '')):
            pw1.classList.add('error');
            pw2.classList.add('error');
            pw1ErrorBox.textContent = '* Password did not match. Please confirm your password.';
            break;
        case ((pw1Value === pw2Value) && (pw1Value !== '') && (pw2Value !== '')):
            pw1.classList.add('correct');
            pw2.classList.add('correct');
    }
}

// --------- //
// RUN CHECK //
// --------- //

const button = document.querySelector('button');
button.addEventListener('click', checkForm);
