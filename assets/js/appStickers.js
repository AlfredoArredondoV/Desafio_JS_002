const boton = document.querySelector("#boton");
const stickersOne = document.querySelector("#stickersOne");
const stickersTwo = document.querySelector("#stickersTwo");
const stickersThree = document.querySelector("#stickersThree");
const textInfo = document.querySelector("#textInfo");
boton.addEventListener("click", () => {
    const valor = Number(stickersOne.value) + Number(stickersTwo.value) + Number(stickersThree.value);
    if ( valor <= 10) {
        textInfo.textContent = "Llevas "+valor+" stickers";
    } else {
        textInfo.textContent = "Llevas demasiados stickers "+valor;
    }
});