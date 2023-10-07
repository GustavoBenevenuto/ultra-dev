export declare class CnpjService {
    static readonly weights: number[][];
    static toGenerate(withMask?: boolean): string;
    static validate(value: string): boolean;
}
