const boton = document.querySelector("#boton");
const border = document.querySelector("#picture");
boton.addEventListener("click", () => {
    if ( document.getElementById("picture").style.border == "" ) {
        document.getElementById("picture").style.border = "2px solid red";
    } else {
        document.getElementById("picture").style.border = "";
    }    
});