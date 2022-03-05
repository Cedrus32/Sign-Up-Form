// -------------- //
// CHECK FUNCTION //
// -------------- //

let firstName = document.getElementById('first-name');
let lastName = document.getElementById('last-name');
let firstNameError = document.getElementById('first-name-error');
let lastNameError = document.getElementById('last-name-error');
function checkName(nameSpace, errorSpace) {
    // get valid
    let isValid = nameSpace.checkValidity();

    // clear previous error messages
    nameSpace.classList = '';
    errorSpace.textContent = '';

    // check value
    if ((isValid === false) && (nameSpace.value !== '')) {
        errorSpace.textContent = "* Name can include letters, spaces, and the special characters  ' -";
    } else if ((isValid === true) && (nameSpace.value !== '')) {
        nameSpace.classList.add('correct');
    }
}

// --------- //
// RUN CHECK //
// --------- //

firstName.addEventListener('focus', () => {
    firstName.addEventListener('keyup', () => {
        checkName(firstName, firstNameError)
})});

lastName.addEventListener('focus', () => {
    lastName.addEventListener('keyup', () => {
        checkName(lastName, lastNameError)
})});