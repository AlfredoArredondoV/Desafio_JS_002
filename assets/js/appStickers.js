const boton = document.querySelector("#boton");
const stickersOne = document.querySelector("#stickersOne");
const stickersTwo = document.querySelector("#stickersTwo");
const stickersThree = document.querySelector("#stickersThree");
const textInfo = document.querySelector("#textInfo");
boton.addEventListener("click", () => {
    if (stickersOne.value >= 0 && stickersTwo.value >= 0 && stickersThree.value >= 0) {
        const valor = Number(stickersOne.value) + Number(stickersTwo.value) + Number(stickersThree.value);
        if (valor <= 10) {
            textInfo.textContent = "Llevas " + valor + " stickers";
        } else {
            textInfo.textContent = "Llevas demasiados stickers " + valor;
        }
    } else {
        textInfo.textContent = "Debes Selecionar solo valores mayores o iguales a 0 ";
    }
});