import test from 'ava';
import reverser from "../src";
y
test('reverse', (t) => {
    t.is(reverser('hello'), 'olleh', 'The strings do not match');
})