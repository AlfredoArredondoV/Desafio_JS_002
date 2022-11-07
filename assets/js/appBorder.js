const border = document.querySelector("#picture");
border.addEventListener("click", () => {
    if ( document.getElementById("picture").style.border == "" ) {
        document.getElementById("picture").style.border = "2px solid red";
    } else {
        document.getElementById("picture").style.border = "";
    }    
});