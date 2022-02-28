// -------------- //
// CHECK FUNCTION //
// -------------- //

function checkPassword () {
    // get variables
    let pw1 = document.getElementById('pw');
    let pw1Value = pw1.value;
    let pw2 = document.getElementById('pw-confirm');
    let pw2Value = pw2.value;

    const pwErrorBox = document.getElementById('pw-error');
    const pwConfirmErrorBox = document.getElementById('pw-confirm-error');

    // clear previous error messages
    pw1.classList.remove('error');
    pw2.classList.remove('error');
    pwErrorBox.textContent = '';
    pwConfirmErrorBox.textContent = '';

    // compare variables
    switch (true) {
        case (pw1Value === ''):
            pw1.classList.add('error');
            pwErrorBox.textContent = '* Please Enter Password'
            break;
        case (pw2Value === ''):
            pw2.classList.add('error');
            pwConfirmErrorBox.textContent = '* Please Confirm Password'
            break;
        case (pw1Value !== pw2Value):
            pw1.classList.add('error');
            pw2.classList.add('error');
            pwErrorBox.textContent = '* Password did not match. Please confirm your password.'
            return false;
        case ((pw1 === pw2) && (pw1 !== '') && (pw2 !== '')):
            return true;
    }
}

// --------- //
// RUN CHECK //
// --------- //

const button = document.querySelector('button');
console.log(button);
button.addEventListener('click', checkPassword);
