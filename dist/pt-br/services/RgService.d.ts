export declare class RgService {
    static toGenerate(withMask?: boolean): string;
    static validate(value: string): boolean;
    private static calculateCheckDigit;
    private static applyMask;
}
