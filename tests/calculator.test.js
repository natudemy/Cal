const { add, subtract, multiply, divide} = require('../index');


test('adds 7 + 3 to equal 10', () => {    
    expect(add(7, 3)).toBe(10);
})

test('subtracts 7 - 3 to equal 4', () => {
    expect(subtract(7, 3)).toBe(4);
})

test('multiplies 7 * 3 to equal 21', () => {
    expect(multiply(7, 3)).toBe(21);
})      

test('divides 9 / 3 to equal 3', () => {
    expect(divide(9, 3)).toBe(3);
});
