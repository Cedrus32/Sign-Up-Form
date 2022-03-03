// -------------- //
// CHECK FUNCTION //
// -------------- //

//TODO remove vvv
function checkForm() {
    checkName();
    checkEmail();
    checkPhone();
    checkPassword();
}

let firstName = document.getElementById('first-name');
let lastName = document.getElementById('last-name');
let firstNameError = document.getElementById('first-name-error');
let lastNameError = document.getElementById('last-name-error');
function checkName(nameSpace, nameSpaceError) {
    // get values
    let name = nameSpace;
    let nameValue = nameSpace.value;
    const alphaRegex = /^[A-Z]([ '-]?[a-zA-Z])*$/;
    let nameTest = alphaRegex.test(nameValue);
    let nameError = nameSpaceError;

    //clear previous error messages
    name.classList = '';
    nameError.textContent = '';

    // check values
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
function checkEmail() {
    // get value
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

let phone = document.getElementById('phone');
function checkPhone() {
    //get value
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

let pw1 = document.getElementById('pw');
let pw2 = document.getElementById('pw-confirm');
function checkPassword () {
    // get values
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
        pw2.classList.add('error');
        pw2ErrorBox.textContent = '* Please Confirm Password'
        if (pw1Value === '') {
            pw1ErrorBox.textContent = '* Please Enter Password'
        } else {
            pw1ErrorBox.textContent = '* Password must be at least 8 characters long and can contain the special characters  ! @ # $ % ^ & * ( )'
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

firstName.addEventListener('blur', () => {
    checkName(firstName, firstNameError);
});

lastName.addEventListener('blur', () => {
    checkName(lastName, lastNameError);
});

const button = document.querySelector('button');
button.addEventListener('click', checkForm);
