// You already have the methods imported
const { default: expect } = require('expect');
const {getUser, getUsers} = require('../users');
const { number } = require('yargs');


// Make a test to verify if the method getUser(id) works correctly
// Verify any data of the resulting object you want

// READ documentation

test('the id method works', () => {
    expect(getUser(1)).toEqual({
        id: 1,
        username: "hpLover4",
        email: "sirious90@gmail.com",
        password: "hArrydotCom"});
});
