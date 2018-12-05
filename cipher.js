window.cipher = {
  encode: (inputText,offset ) => {
     //funcion que contiene el codigo que cifrará lo que se ingrese en el inputText.
    
      let result=""; //esta var va a contener el texto cifrado/descifrado.
      
      for(let i= 0; i <inputText.lenght; i++){
      //for recorre cada letra que este en el inputText (que es el texto que ingreso el usuario).
      let x= inputText.charCodeAt(i);
      /*var x ahora contiene el texto ingresado por el usuario convertido en codigo ASCII ya que 
      charCodeAt()devuelvio la posicion de las letras con la ayuda de i, que le indico la cantidad
      exacta de caracteres*/
      if (x >= 65 && x <= 90){
        /* la condicion del if indica que para que sea true x debe ser mayoroigual a 65(numero de la 
          posicion de "A" mayuscula en el cod ASCII) y menoroigual a 90("Z")*/
        let codigoEncriptado= (x-65 + offset)%26 + 65;
        /*si es true, se ejecuta esta operacion donde var codigoEncriptado es igual a x - el
        cod ASCII + la posiciones a desplazarse por el residuo de 26 (cantidad de letras del abecedario sin ñ)
        + cod ASCII */
        result += String.fromCharCode(codigoEncriptado);
        /* 1.- esta var estaba vacia y se le asigna el valor de cada caracter devuelto en la posicion del cod ASCII
        que fue desplazado en forma de string.
        2.- += hace que el valor de result vaya cambiando cada vez que va sumando un caracter, hasta llegar al ultimo*/
      }
    } 
        return result;
     },

  decode: (inputText,offset ) => {
    
    let result="";
    for(let i= 0; i <inputText.lenght; i++){
      //for recorre cada letra que este en el inputText (que es el texto que ingreso el usuario).
      let x= inputText.charCodeAt(i);
      /*var x ahora contiene el texto ingresado por el usuario convertido en codigo ASCII ya que 
      charCodeAt()devuelvio la posicion de las letras con la ayuda de i, que le indico la cantidad
      exacta de caracteres*/
      if (x >= 65 && x <= 90){
        /* la condicion del if indica que para que sea true x debe ser mayoroigual a 65(numero de la 
          posicion de "A" mayuscula en el cod ASCII) y menoroigual a 90("Z")*/
        let codigoEncriptado= (x-65 - offset)%26 + 65;
        /*si es true, se ejecuta esta operacion donde var codigoEncriptado es igual a x - el
        cod ASCII + la posiciones a desplazarse por el residuo de 26 (cantidad de letras del abecedario sin ñ)
        + cod ASCII */
        result += String.fromCharCode(codigoEncriptado);
        /* 1.- esta var estaba vacia y se le asigna el valor de cada caracter devuelto en la posicion del cod ASCII
        que fue desplazado en forma de string.
        2.- += hace que el valor de result vaya cambiando cada vez que va sumando un caracter, hasta llegar al ultimo*/
      }
    } 
        return result;
  }
};
