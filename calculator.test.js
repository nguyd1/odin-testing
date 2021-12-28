const calculator=require('./calculator');

test('adds 1 + 2 to equal 3',()=>{
    expect(calculator.add(1,2)).toBe(3);
});

test('subtracts 5 - 3 to equal 2',()=>{
    expect(calculator.subtract(5,3)).toBe(2);
});

test('multiplies 2 * 3 to equal 6',()=>{
    expect(calculator.multiply(2,3)).toBe(6);
});

test('divides 10 / 2 to be 5',()=>{
    expect(calculator.divide(10,2)).toBe(5);
});