type TypeCurrencySymbols = '$' | '€' | '£' | '¥' | 'R$' | '₹';

export class CurrencyService {
    static format(value: number, currencySymbol: TypeCurrencySymbols = 'R$', decimalCount: number = 2, decimalSeparator: string = ',', thousandsSeparator: string = '.'): string {
        let integerPart = Math.floor(value);
        let decimalPart = Math.round((value - integerPart) * Math.pow(10, decimalCount));
        let formattedIntegerPart = integerPart.toString().replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSeparator);
        let formattedDecimalPart = decimalPart.toString().padStart(decimalCount, '0');
        return `${currencySymbol} ${formattedIntegerPart}${decimalSeparator}${formattedDecimalPart}`;
    }

    static removeFormatting(value: string): number {
        let cleanedValue = value.replace(/[^\d,.-]/g, '');
        cleanedValue = cleanedValue.replace('.', '');
        cleanedValue = cleanedValue.replace(',', '.');
        return parseFloat(cleanedValue);
    }
}