"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyService = void 0;
class CurrencyService {
    static format(value, currencySymbol = 'R$', decimalCount = 2, decimalSeparator = ',', thousandsSeparator = '.') {
        let integerPart = Math.floor(value);
        let decimalPart = Math.round((value - integerPart) * Math.pow(10, decimalCount));
        let formattedIntegerPart = integerPart.toString().replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSeparator);
        let formattedDecimalPart = decimalPart.toString().padStart(decimalCount, '0');
        return `${currencySymbol} ${formattedIntegerPart}${decimalSeparator}${formattedDecimalPart}`;
    }
    static removeFormatting(value) {
        let cleanedValue = value.replace(/[^\d,.-]/g, '');
        cleanedValue = cleanedValue.replace('.', '');
        cleanedValue = cleanedValue.replace(',', '.');
        return parseFloat(cleanedValue);
    }
}
exports.CurrencyService = CurrencyService;
