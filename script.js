// -------------- //
// CHECK FUNCTION //
// -------------- //

function checkForm() {
    checkName();
    // checkContact();
    checkPassword();
}

function checkName() {
    // get variables
    let fn = document.getElementById('first-name');
    let ln = document.getElementById('last-name');
    let fnValue = fn.value;
    let lnValue = ln.value;
    const fnErrorBox = document.getElementById('first-name-error');
    const lnErrorBox = document.getElementById('last-name-error');
    const alpha = /[a-zA-Z]+/;
    let fnAlphTest = alpha.test(fnValue);
    let lnAlphTest = alpha.test(lnValue);
    console.log(fnAlphTest);
    console.log(lnAlphTest);

    // clear previous error messages
    fn.classList.remove('error');
    ln.classList.remove('error');
    fnErrorBox.textContent = '';
    lnErrorBox.textContent = '';

    // compare values
    if ((fnValue === '') || (lnValue === '')) {
        if (fnValue === '') {
            fn.classList.add('error');
            fnErrorBox.textContent = '* Please Enter First Name';
        }
        if (lnValue === '') {
            ln.classList.add('error');
            lnErrorBox.textContent = '* Please Enter Last Name';
        }
    } else if ((fnAlphTest === false) || (lnAlphTest === false)) {
        if (fnAlphTest === false) {
            fn.classList.add('error');
            fnErrorBox.textContent = '* Please Use Letters Only';
        }
        if (lnAlphTest === false) {
            ln.classList.add('error');
            lnErrorBox.textContent = '* Please Use Letters Only';
        }
    }
}

// function checkContact () {
//     // get variables
//     let email = document.getElementById('email');
//     let phone = document.getElementById('phone');
//     let emailValue = email.value;
//     let phoneValue = phone.value;
//     const emailErrorBox = document.getElementById('email-error');
//     const phoneErrorBox = document.getElementById('phone-error');

//     // clear previous error messages

//     // compare variables
//     switch (true) {
//         case (() && ()):
//             break;
//         case ():
//             break;
//         case ();
//     }
// }

function checkPassword () {
    // get variables
    let pw1 = document.getElementById('pw');
    let pw2 = document.getElementById('pw-confirm');
    let pw1Value = pw1.value;
    let pw2Value = pw2.value;
    const pw1ErrorBox = document.getElementById('pw-error');
    const pw2ErrorBox = document.getElementById('pw-confirm-error');

    // clear previous error messages
    pw1.classList.remove('error');
    pw2.classList.remove('error');
    pw1ErrorBox.textContent = '';
    pw2ErrorBox.textContent = '';

    // compare variables
    switch (true) {
        case (pw1Value === ''):
            pw1.classList.add('error');
            pw1ErrorBox.textContent = '* Please Enter Password'
            break;
        case (pw2Value === ''):
            pw2.classList.add('error');
            pw2ErrorBox.textContent = '* Please Confirm Password'
            break;
        case (pw1Value !== pw2Value):
            pw1.classList.add('error');
            pw2.classList.add('error');
            pw1ErrorBox.textContent = '* Password did not match. Please confirm your password.'
            return false;
        case ((pw1 === pw2) && (pw1 !== '') && (pw2 !== '')):
            pw1.classList.add('correct');
            pw2.classList.add('correct');
            return true;
    }
}

// --------- //
// RUN CHECK //
// --------- //

const button = document.querySelector('button');
button.addEventListener('click', checkForm);
