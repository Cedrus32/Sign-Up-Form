// -------------- //
// CHECK FUNCTION //
// -------------- //

function checkPassword () {
    let pw1 = document.getElementById('pw').value;
    let pw2 = document.getElementById('pw-confirm').value;
    console.log({pw1});
    console.log({pw2});

    if (pw1 === '') {
        console.log('[add .error to password inputs]');
        console.log('Please enter Password');
    } else if (pw2 === '') {
        console.log('[add .error to password inputs]');
        console.log('Please confirm Password')
    } else if (pw1 !== pw2) {
        console.log('[add .error to password inputs]');
        console.log('Password did not match. Please confirm your password.');
        return false;
    } else if ((pw1 === pw2) && (pw1 !== '') && (pw2 !== '')) {
        return true;
    }
}

// --------- //
// RUN CHECK //
// --------- //

const button = document.querySelector('button');
console.log(button);
button.addEventListener('click', checkPassword);
