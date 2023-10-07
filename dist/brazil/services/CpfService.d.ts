export declare class CpfService {
    static toGenerate(withMask?: boolean): string;
    static validate(value: string): boolean;
    private static calculateCheckDigit;
}
