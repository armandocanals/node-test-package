const bye = require('./goodbye');

describe('hi', () => {
  it('should return Goodbye!', () => {
    expect(bye()).toBe("Goodbye!");
  });
});
