const boton = document.querySelector("#boton");
const titlePassword = document.querySelector("#titlePassword");
const ValueOne = document.querySelector("#ValueOne");
const ValueTwo = document.querySelector("#ValueTwo");
const ValueThree = document.querySelector("#ValueThree");
boton.addEventListener("click", () => {
    if ( ValueOne.value === 9 && ValueTwo.value === 1 && ValueThree.value === 1) {
        titlePassword.textContent = "Password 1 Correcta!";
    } else if (ValueOne.value === 7 && ValueTwo.value === 1 && ValueThree.value === 4) {
        titlePassword.textContent = "Password 2 Correcta!";
    } else {
        titlePassword.textContent = "Password Incorrecta!";
    }
});