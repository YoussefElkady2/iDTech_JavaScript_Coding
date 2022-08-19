var utils = require('course-utilities');
var greeting = utils.load('./greeting.js', 'greeting');

test('normal', () =>
{
    expect(Greet("Bob")).toBe("Hello, Bob");
});

test('null', () =>
{
    expect(Greet()).toBe("Hello there!");
});

test('SHOUT', () =>
{
    expect(Greet("BOB")).toBe("HELLO BOB!");
});

