const capitalize=require('./capitalize');

test('capitalize hello to Hello',()=>{
    expect(capitalize('hello')).toEqual('Hello');
});