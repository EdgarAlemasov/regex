import Validator from "../validator";

test ("valid name", () => {
    const name = "easyRave";
    const result = Validator.validateUserName(name);
    expect(result).toBe(true)
});

test ("end symbols", () => {
    const name = "Trevor222"
    const result = Validator.validateUserName(name);
    expect(result).toBe(false)
});

test ("start symbols", () => {
    const name = "-jasper";
    const result = Validator.validateUserName(name);
    expect(result).toBe(false)
});

test ("invalid symbols", () => {
    const name = "quick*mage";
    const result = Validator.validateUserName(name);
    expect(result).toBe(false)
});

test ("too much numbers", () => {
    const name = "empty7777log";
    const result = Validator.validateUserName(name);
    expect(result).toBe(false)
});

test ("change number 1", () => {
    const number = "8 (927) 000-00-00";
    const result = "+79270000000";
    expect(Validator.changingPhoneNumber(number)).toEqual(result);
});

test ("change number 2", () => {
    const number = "+7 960 000 00 00";
    const result = "+79600000000";
    expect(Validator.changingPhoneNumber(number)).toEqual(result);
});

test ("change number 3", () => {
    const number = "+86 000 000 0000";
    const result = "+860000000000";
    expect(Validator.changingPhoneNumber(number)).toEqual(result);
});

test ("change number 4", () => {
    const number = "932 (000)-0000";
    const result = "+79320000000";
    expect(Validator.changingPhoneNumber(number)).toEqual(result);
});