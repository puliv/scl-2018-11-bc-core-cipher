
    document.getElementById("botonUno").addEventListener("click", (evento)=>{
        evento.preventDefault();

         document.getElementById("partTwo").style.display="block";
    });
    document.getElementById("botonCifrar").addEventListener("click", (evento)=>{
        evento.preventDefault();

         let inputText= document.getElementById("textoIgresado").value; 
         let offset= document.getElementById("offSet").value; 
         let resultFinal= cipher.encode(inputText, offset);
         document.getElementById("textoReady").innerHTML= resultFinal;

         document.getElementById("partThree").style.display="block";
    });
    document.getElementById("botonDecifrar").addEventListener("click", (evento)=>{
        evento.preventDefault();

         let inputText= document.getElementById("textoIgresado").value;
         let offset= document.getElementById("offSet").value;
         let resultFinal= cipher.decode(inputText, offset);
         document.getElementById("textoReady").innerHTML= resultFinal;

         document.getElementById("partThree").style.display="block";
    });
