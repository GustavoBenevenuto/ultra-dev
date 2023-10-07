type TypeCreditCardBrand = 'AMEX' | 'MASTERCARD' | 'VISA';
interface IRetrunCreditCardBrand {
    number: string;
    expirity: string;
    cvv: string;
    brand: string;
}
export declare class CreditCardService {
    static toGenerate(brand: TypeCreditCardBrand): IRetrunCreditCardBrand | Promise<IRetrunCreditCardBrand>;
    static validate(value: string): boolean | Promise<boolean>;
    private static toGenerateCardNumber;
    private static checkDigit;
    private static toGenerateRamdomDateInBetween;
    private static luhnCheck;
}
export {};
