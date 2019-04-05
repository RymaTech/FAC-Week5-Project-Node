const test = require('tape');
const filter = require('../scripts/BoroughFunc.js');
const lambeth = require('./ObjLambeth.json');
const wandsworth = require('./ObjWandsworth.json');



test('testing tape', t => {
    t.pass();
    t.end();
})

test('lambeth test', t => {
    const actual = filter(lambeth);
    const expected = [3, 2, 2, 4, 1, 1, 2]

    t.deepEqual(actual, expected, 'lambeth pollution array should have 7 items');
    t.end();
})


test('wandsworth test', t => {
    const actual = filter(wandsworth);
    const expected = [2, 3, 2, 3, 2, 1, 2, 2, 2]

    t.deepEqual(actual, expected, 'wandsworth pollution array should have 9 items');
    t.end();
})