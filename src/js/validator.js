export default class Validator {
    static validateUserName (name) {
        const rightSymbols = /^[_-\w\d]+$/;
        const numbers = /\d{4}/;
        const startStr = /^[_-\d]/;
        const endStr = /[_-\d]$/;

        if (!rightSymbols.test(name) || numbers.test(name) || startStr.test(name) || endStr.test(name)) {
            return false
        } else {
            return true
        }
    }

    static changingPhoneNumber (phone) {
        const findNumbers = /\D+/g;
        const concatenateNumbers = phone.replace(findNumbers, '');
        let changedPhoneNumber;

        if (concatenateNumbers.length === 11) {
            const changeNum = "+" + concatenateNumbers.replace(/^8/, "7");
            changedPhoneNumber = changeNum
        } else if (concatenateNumbers.length === 10) {
            changedPhoneNumber = "+7" + concatenateNumbers
        } else {
            changedPhoneNumber = "+" + concatenateNumbers
        }
        return changedPhoneNumber;
    }
}
