import Validator from "../validator";

test ("end symbols Error", () => {
    const name = new Validator("Trevor222");
    expect(() => {name.validateUserName()}).toThrow("Name is mustn't end with this symbols. Please, try again!");
});

test ("start symbols Error", () => {
    const name = new Validator("-jasper");
    expect(() => {name.validateUserName()}).toThrow("Name is mustn't start with this symbols. Please, try again!");
});

test ("invalid symbols", () => {
    const name = new Validator("quick*mage");
    expect(() => {name.validateUserName()}).toThrow("You used invalid symbols. Please, try again!");
});

test ("too much numbers", () => {
    const name = new Validator("empty7777log");
    expect(() => {name.validateUserName()}).toThrow("Too much numbers in a row. Please, try again!");
});

test ("change number 1", () => {
    const number = new Validator("Jankins", "8 (927) 000-00-00");
    number.validatePhoneNumber();
    const result = {
        name: "Jankins",
        phone: "+79270000000"
    };
    expect(number).toEqual(result);
});

test ("change number 2", () => {
    const number = new Validator("Jankins", "+7 960 000 00 00");
    number.validatePhoneNumber();
    const result = {
        name: "Jankins",
        phone: "+79600000000"
    };
    expect(number).toEqual(result);
});

test ("change number 3", () => {
    const number = new Validator("Jankins", "+86 000 000 0000");
    number.validatePhoneNumber();
    const result = {
        name: "Jankins",
        phone: "+860000000000"
    };
    expect(number).toEqual(result);
});

test ("change number 4", () => {
    const number = new Validator("Jankins", "932 (000)-0000");
    number.validatePhoneNumber();
    const result = {
        name: "Jankins",
        phone: "+79320000000"
    };
    expect(number).toEqual(result);
});