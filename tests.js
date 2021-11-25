// ¡NO TOCAR ESTE ARCHIVO! MODIFICARLO HARÁ QUE LOS RESULTADOS SEAN ERRÓNEOS Y EL EJERCICIO NO ESTÉ CORRECTAMENTE RESUELTO

// Set up mocha
mocha.setup('bdd');

// Establish variables for use in all tests
const { assert, expect } = chai;

describe('Test - Operadores Lógicos I', () => {
  it('Las variables edad y edadParaCarnet existen y puedeTenerCarnet es "false"', () => {
    expect(edad).to.not.be.an('undefined');
    expect(edadParaCarnet).to.not.be.an('undefined');
    expect(puedeTenerCarnet).to.be.false;
  });

  it('Las variables edad y edadParaCarnet valen ahora 24 y 18 años', () => {
    expect(edad).to.equal(24);
    expect(edadParaCarnet).to.equal(18);
  });

  it('Las variable puedoSacarmeElCarnet es ahora "true"', () => {
    expect(puedoSacarmeElCarnet).to.be.true;
  });
});
