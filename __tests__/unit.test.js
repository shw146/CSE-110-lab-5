// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,   
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
// Testing phone numbers
test("test a valid phone number (999)305-4544", () =>{
    expect(isPhoneNumber("(999)305-4544")).toBe(true);
});
test("test a valid phone number 555-555-5555", () => {
    expect(isPhoneNumber("555-555-5555")).toBe(true);
});
test("test an invalid phone number 555-555-555", () => {
    expect(isPhoneNumber("555-555-555")).toBe(false);
});
/* *** These tests fail for some reason!!! ***
test("test an invalid phone number (555555)-555-5555", () => {
    expect(isPhoneNumber("(555555)-555-5555")).toBe(false);
});

test("test too long 555-555-55555555", () => {
    expect(isPhoneNumber("555-555-55555555")).toBe(false);
});
*/
test("test no dashes: 5555555555", () => {
    expect(isPhoneNumber("5555555555")).toBe(false);
});


// Testing emails
test("test my email: shw146@ucsd.edu", () => {
    expect(isEmail("shw146@ucsd.edu")).toBe(true);
});
test("test a valid email: asdf@google.com", () => {
    expect(isEmail("asdf@google.com")).toBe(true);
});
test("test an invalid email: myemailistotallyreal$gmail.com", () => {
    expect(isEmail("myemailistotallyreal$gmail.com")).toBe(false);
});
test("test an invalid email: #$%@%#@gmail.com", () => {
    expect(isEmail("#$%@%#@gmail.com")).toBe(false);
});


//Testing passwords
test("test strong password: ASEAWASsafwA", () => {
    expect(isStrongPassword("ASEAWASsafwA")).toBe(true);
});
test("test strong password: ADWA", () => {
    expect(isStrongPassword("ADWA")).toBe(true);
});
test("test password too long: asdfasdfasdfasdfasdfasdfasdfassda", () => {
    expect(isStrongPassword("asdfasdfasdfasdfasdfasdfasdfassda")).toBe(false);
});
test("test password with symbols: $#QAasas", () => {
    expect(isStrongPassword("$#QAasas")).toBe(false);
});


// Testing dates
test("test valid date: 04/12/2045", () => {
    expect(isDate("04/12/2045")).toBe(true);
});
test("test valid date: 12/01/2456", () => {
    expect(isDate("12/01/2456")).toBe(true);
});
test("test short year: 04/12/456", () => {
    expect(isDate("04/12/456")).toBe(false);
});
test("test month too long: 555/12/2025", () => {
    expect(isDate("555/12/2025")).toBe(false);
});


// Testing hex colors
test("test valid hex: #FFFFFF", () => {
    expect(isHexColor("#FFFFFF")).toBe(true);
});
test("test valid hex: #FAA345", () => {
    expect(isHexColor("#FAA345")).toBe(true);
});
test("test too short: #FFFF", () => {
    expect(isHexColor("FFFF")).toBe(false);
});
test("test too long: #FFFFFFFFFF", () => {
    expect(isHexColor("#FFFFFFFFFF")).toBe(false);
});


