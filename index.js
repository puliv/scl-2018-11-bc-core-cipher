
document.getElementById("botonUno").addEventListener("click", (evento) => {
    evento.preventDefault();

    document.getElementById("partTwo").style.display = "block";
});

document.getElementById("botonDos").addEventListener("click", (evento) =>  {
    document.getElementById("aboutTxtCh").style.display = "block";
});

document.getElementById("botonCifrar").addEventListener("click", (evento) => {
    evento.preventDefault();

    let inputText = document.getElementById("textoIngresado").value;
    let offset = parseInt(document.getElementById("offSet").value);
    

    document.getElementById("textoReady").innerHTML = window.cipher.encode(inputText, offset);
    

    document.getElementById("partThree").style.display = "block";
});
document.getElementById("botonDecifrar").addEventListener("click", (evento) => {
    evento.preventDefault();

    let inputText = document.getElementById("textoIngresado").value;
    let offset = parseInt(document.getElementById("offSet").value);
    

    document.getElementById("textoReady").innerHTML = window.cipher.decode(inputText, offset);
    

    document.getElementById("partThree").style.display = "block";
});
