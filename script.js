//TODO add visual '𝙓' or '✓' when validating (next to label), inline styling?
//TODO make validation live on unfocus AFTER AN INITIAL FOCUS

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
    const alphaRegex = /^[A-Z]([ '-]?[a-zA-Z])*$/;

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

        if (nameValue.length <= 30) {
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
        } else if (nameValue.length > 30) {
            name.classList.add('error');
            nameError.textContent = '* Exceeds Maximum Character Count';
        }
    }
}

function checkContact () {
    checkEmail();
    checkPhone();
}

function checkEmail() {
    // get value
    let email = document.getElementById('email');
    let emailValue = email.value;
    const emailRegex = /^[a-zA-Z0-9]+([._-]?[a-zA-Z0-9]+)*@[a-z0-9]+([._-]?[a-zA-Z0-9]+)*.[a-z]{2,}$/;
    let emailTest = emailRegex.test(emailValue);
    let emailError = document.getElementById('email-error');

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

function checkPassword () {
    // get values
    let pw1 = document.getElementById('pw');
    let pw2 = document.getElementById('pw-confirm');
    let pw1Value = pw1.value;
    let pw2Value = pw2.value;
    const pwRegex = /[a-zA-Z0-9!@#$%^&*()]{8,30}/;
    let pwTest = pwRegex.test(pw1Value);
    let pw1ErrorBox = document.getElementById('pw-error');
    let pw2ErrorBox = document.getElementById('pw-confirm-error');
    

    // clear previous error messages
    pw1.classList = '';
    pw2.classList = '';
    pw1ErrorBox.textContent = '';
    pw2ErrorBox.textContent = '';

    // compare values
    if (pwTest === false) {
        pw1.classList.add('error');
        if (pw1Value === '') {
            pw1ErrorBox.textContent = '* Please Enter Password'
        } else {
            pw1ErrorBox.textContent = '* Please Enter Valid Password'
        }
    } else if (pwTest === true) {
        pw1.classList.add('correct');
        if (pw1Value === pw2Value) {
            pw2.classList.add('correct');
        } else {
            pw2.classList.add('error');
            pw2ErrorBox.textContent = '* Password did not match. Please confirm your password.'
        }
    }
    if (pw2Value === '') {
        pw2.classList.add('error');
        pw2ErrorBox.textContent = '* Please Confirm Password'
    }
}

// --------- //
// RUN CHECK //
// --------- //

const button = document.querySelector('button');
button.addEventListener('click', checkForm);
