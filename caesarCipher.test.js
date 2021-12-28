const caesarCipher=require('./caesarCipher');

test('test wrapping from z to a',()=>{
    expect(caesarCipher('Z',1)).toBe('A');
});

test('test keeping the same case',()=>{
    expect(caesarCipher('Hey',5)).toBe('Mjd');
});

test('test punctuation',()=>{
    expect(caesarCipher('Hello, World!',5)).toBe('Mjqqt, Btwqi!');
});