// -------------- //
// CHECK FUNCTION //
// -------------- //

let firstName = document.getElementById('first-name');
let lastName = document.getElementById('last-name');
let firstNameError = document.getElementById('first-name-error');
let lastNameError = document.getElementById('last-name-error');
// function checkName(nameSpace, nameSpaceError) {
//     // get values
//     let name = nameSpace;
//     let nameValue = name.value;
//     const alphaRegex = /^[A-Z]([ '-]?[a-zA-Z])*$/;
//     let nameTest = alphaRegex.test(nameValue);
//     let nameError = nameSpaceError;

//     //clear previous error messages
//     name.classList = '';
//     nameError.textContent = '';

//     // check value
//     if (nameValue.length <= 30) {
//         if (nameValue === '') {
//             name.classList.add('error');
//             if (nameSpace.id === 'first-name') {
//                 nameError.textContent = '* Please Enter Your First Name';
//             } else if (nameSpace.id === 'last-name') {
//                 nameError.textContent = '* Please Enter Your Last Name';
//             }
//         } else if (nameTest === false) {
//             name.classList.add('error');
//             nameError.textContent = "* Name can include letters, spaces, and the special characters  ' -";
//         } else if (nameTest === true) {
//             name.classList.add('correct');
//         }
//     } else if (nameValue.length > 30) {
//         name.classList.add('error');
//         nameError.textContent = '* Exceeds Maximum Character Count'
//     }
// }

// --------- //
// RUN CHECK //
// --------- //

firstName.addEventListener('focus', () => {
    firstName.addEventListener('keyup', (e) => {
        console.log(e);
        console.log(firstName.value);
        console.log({ValidityState});
        // checkName(firstName, firstNameError);
})});

lastName.addEventListener('focus', () => {
    lastName.addEventListener('keyup', (e) => {
        console.log(e);
        console.log(firstName.value);
        console.log({ValidityState});
        // checkName(lastName, lastNameError);
})});
