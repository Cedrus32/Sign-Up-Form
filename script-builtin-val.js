// -------------- //
// CHECK FUNCTION //
// -------------- //

let firstName = document.getElementById('first-name');
let lastName = document.getElementById('last-name');
function checkName(nameSpace) {
    // set valid
    let isValid = nameSpace.checkValidity();
    let nameClass;
    let nameLabel;
    let nameError;
    if (nameSpace.id === 'first-name') {
        nameClass = 'first-name';
        nameLabel = document.querySelector('label.first-name.required');
        nameError = document.getElementById('first-name-error');
    } else if (nameSpace.id == 'last-name') {
        nameClass = 'last-name';
        nameLabel = document.querySelector('label.last-name.required');
        nameError = document.getElementById('last-name-error');
    }

    // clear previous error messages
    nameSpace.classList = '';
    nameLabel.classList.remove('hide');
    nameError.textContent = '';

    // check value
    if ((isValid === false) && (nameSpace.value !== '')) {
        nameError.textContent = "* Name can include letters, spaces, and the special characters  ' -";
    } else if ((isValid === true) && (nameSpace.value !== '')) {
        nameLabel.classList.add('hide');
        nameSpace.classList.add('correct');
    }
}

// --------- //
// RUN CHECK //
// --------- //

firstName.addEventListener('focus', () => {
    firstName.addEventListener('keyup', () => {
        checkName(firstName);
})});

firstName.addEventListener('blur', () => {
    firstName.classList = '';
});

lastName.addEventListener('focus', () => {
    lastName.addEventListener('keyup', () => {
        checkName(lastName);
})});

lastName.addEventListener('blur', () => {
    lastName.classList = '';
});