type TypeCurrencySymbols = '$' | '€' | '£' | '¥' | 'R$' | '₹';
export declare class CurrencyService {
    static format(value: number, currencySymbol?: TypeCurrencySymbols, decimalCount?: number, decimalSeparator?: string, thousandsSeparator?: string): string;
    static removeFormatting(value: string): number;
}
export {};
