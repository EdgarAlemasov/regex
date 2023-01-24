export default class Validator {
    constructor (name=null, phone=null) {
        this.name = name;
        this.phone = phone;
    }

    validateUserName () {
        const rightSymbols = /^[_-\w\d]+$/;
        const numbers = /\d{4}/;
        const startStr = /^[_-\d]/;
        const endStr = /[_-\d]$/;

        if (!rightSymbols.test(this.name)) {
            throw new Error ("You used invalid symbols. Please, try again!");
        } else if (numbers.test(this.name)) {
            throw new Error ("Too much numbers in a row. Please, try again!");
        } else if (startStr.test(this.name)) {
            throw new Error ("Name is mustn't start with this symbols. Please, try again!");
        } else if (endStr.test(this.name)) {
            throw new Error ("Name is mustn't end with this symbols. Please, try again!");
        }
    }

    validatePhoneNumber () {
        const findNumbers = /\D+/g
        const concatenateNumbers = this.phone.replace(findNumbers, '')

        if (concatenateNumbers.length === 11) {
            const changeNum = "+" + concatenateNumbers.replace(/^8/, "7");
            this.phone = changeNum
        } else if (concatenateNumbers.length === 10) {
            this.phone = "+7" + concatenateNumbers
        } else {
            this.phone = "+" + concatenateNumbers
        }
    }
}