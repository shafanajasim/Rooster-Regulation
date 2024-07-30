const assert = require('assert');
const Rooster = require('../index.js');

describe('Rooster', ()=> {
  describe('announceDawn', ()=> {
    it('returns a rooster call',()=> {
      //test
  // Setup
    const expected = 'cock-a-doodle-doo!';
  // Exercise
    const actual = Rooster.announceDawn();
  // Verify
    assert.strictEqual(actual, expected);
    });
  });
});


describe('.timeAtDawn',()=> {
  it('returns its argument as a string', () => {
  // Setup
  const input = 4; // or any valid hour
  const expected = '4';
  
  // Exercise
  const actual = Rooster.timeAtDawn(input);
  
  // Verify
  assert.strictEqual(actual, expected);
});
it('throws an error if passed a number less than 0', () => {
  // Setup
  const input = -1; // Less than 0
  
  // Exercise and Verify
  assert.throws(() => {
    Rooster.timeAtDawn(input);
  }, RangeError);
});
it('throws an error if passed a number greater than 23', () => {
  // Setup
  const input = 24; // Greater than 23
  
  // Exercise and Verify
  assert.throws(() => {
    Rooster.timeAtDawn(input);
  }, RangeError);
});
});

