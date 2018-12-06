window.cipher = {
  encode: (inputText, offset) => {
  
    let result = "";
    for (let i = 0; i < inputText.length; i++) {
      let x = inputText.charCodeAt(i);
            
      if (x >= 65 && x <= 90) {
        let codigoEncriptado = (x - 65 + offset) % 26 + 65;
        
        result += String.fromCharCode(codigoEncriptado);
      }
    }
    return result;
  },

  decode: (inputText, offset) => {

    let result = "";
    for (let i = 0; i < inputText.length; i++) {
      let x = inputText.charCodeAt(i);
            
      if (x >= 65 && x <= 90) {
        let codigoEncriptado = (x - 65 - offset) % 26 + 65;
        
        result += String.fromCharCode(codigoEncriptado);
      }
    }
    return result;
  }
};
