const utils = require('./utils')

test('test of roundedNum 1.2 is equal to 1', () => {
    const result = utils.roundedNum(1.2);
    expect(result).toBe(1)
})


test('test of roundedNum 1.6 is equal to 2', () => {
    const result = utils.roundedNum(1.6);
    expect(result).toBe(2)
})