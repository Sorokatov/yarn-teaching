import test from 'ava';
import reverser from "../src";

test('reverse', (t) => {
    t.is(reverser('hello'), 'olleh', 'The strings do not match');
})