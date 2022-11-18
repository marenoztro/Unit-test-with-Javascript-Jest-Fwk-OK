// importar la función sum del archivo app.js
const {
    sum,
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound
} = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});




test("One euro should be 1.206 dollars", function() {
    // importo la funcion desde app.js
    // const {
    //     fromEuroToDollar
    // } = require('./app.js')

    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})




test("1.2 dollar should be 127.9 yen", function() {
    // importo la funcion desde app.js
    // const {
    //     fromDollarToYen
    // } = require('./app.js')

    // hago mi comparacion (la prueba)
    expect(fromDollarToYen(1.2)).toBe(127.9); // 1.2 dolares son 127.9 yenes, entonces 2.4 dolares deberian ser = (2.4 * 127.9)
})




test("127.9 yen should be 0.8 pounds", function() {
    // importo la funcion desde app.js
    // const {
    //     fromYenToPound
    // } = require('./app.js')

    // hago mi comparacion (la prueba)
    expect(fromYenToPound(127.9)).toBe(0.8); // 127.9 yenes son 0.8 libras, entonces 255.8 yenes deberian ser = (255.8 * 0.8)
})