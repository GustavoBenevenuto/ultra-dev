"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditCardService = void 0;
class CreditCardService {
    static toGenerate(brand) {
        let number = this.toGenerateCardNumber(brand);
        while (!this.luhnCheck(number)) {
            number = this.toGenerateCardNumber(brand);
        }
        return {
            number,
            expirity: this.toGenerateRamdomDateInBetween(),
            cvv: String(Math.floor(Math.random() * (999 - 100)) + 100),
            brand,
        };
    }
    static validate(value) {
        const cards = {
            Visa: /^4[0-9]{12}(?:[0-9]{3})/,
            Mastercard: /^5[1-5][0-9]{14}/,
            Amex: /^3[47][0-9]{13}/,
        };
        for (var card in cards) {
            if (value.match(cards[card])) {
                return true;
            }
        }
        return false;
    }
    static toGenerateCardNumber(brand) {
        let bin;
        let numberLength;
        switch (String(brand).toUpperCase()) {
            case 'AMEX':
                bin = ['34', '37'].sort(() => 0.5 - Math.random())[0];
                numberLength = 15;
                break;
            case 'MASTERCARD':
                bin = ['51', '55'].sort(() => 0.5 - Math.random())[0];
                numberLength = 16;
                break;
            case 'VISA':
                bin = '4';
                numberLength = 16;
                break;
            default:
                bin = '55';
                numberLength = 16;
        }
        let cardNumber = bin, randomNumberLength = numberLength - (bin.length + 1);
        for (let i = 0; i < randomNumberLength; i++) {
            let digit = Math.floor(Math.random() * 9 + 0);
            cardNumber += digit;
        }
        let checkDigit = this.checkDigit(cardNumber);
        cardNumber += String(checkDigit);
        return cardNumber;
    }
    static checkDigit(number) {
        let sum = 0, module, checkDigit;
        for (let i = 0; i < number.length; i++) {
            let digit = parseInt(number.substring(i, i + 1));
            if (i % 2 == 0) {
                digit = digit * 2;
                if (digit > 9) {
                    digit = digit / 10 + (digit % 10);
                }
            }
            sum += digit;
        }
        module = parseInt(String(sum)) % 10;
        checkDigit = module === 0 ? 0 : 10 - module;
        return checkDigit;
    }
    static toGenerateRamdomDateInBetween() {
        const start = new Date();
        const end = new Date(start.getFullYear() + 5, start.getMonth(), start.getDate());
        const randomDate = new Date(Math.floor(Math.random() * (end.getTime() - start.getTime() + 1) + start.getTime()));
        return `${('0' + (randomDate.getMonth() + 1)).slice(-2)}/${randomDate.getFullYear()}`;
    }
    static luhnCheck(num) {
        let arr = (num + '')
            .split('')
            .reverse()
            .map((x) => parseInt(x));
        let lastDigit = arr.splice(0, 1)[0];
        let sum = arr.reduce((acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9), 0);
        sum += lastDigit;
        return sum % 10 === 0;
    }
}
exports.CreditCardService = CreditCardService;
