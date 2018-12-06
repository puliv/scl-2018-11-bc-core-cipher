describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería retornar "GHIJKLM" para "ABCDEFG" con offset de -20', () => {
      assert.equal(cipher.encode("ABCDEFG", -20),"GHIJKLM");
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offest 33', () =>{
      assert.equal(cipher.encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 33),"HIJKLMNOPQRSTUVWXYZABCDEFG");
    });
  });

  describe('cipher.decode', () => {

    it('debería retonar "UVWXYZA" para "ABCDEFG" con offset de -20',() =>{
      assert.equal(cipher.decode("ABCDEFG", -20),"UVWXYZA");
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offest 33',() =>{
    assert.equal(cipher.decode("HIJKLMNOPQRSTUVWXYZABCDEFG", 33),"ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });
  });

});
