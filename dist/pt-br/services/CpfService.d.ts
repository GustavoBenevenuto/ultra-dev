import { IBaseGenerationValidation } from "../../interfaces/IBaseGenerationValidation";
export declare class CpfService implements IBaseGenerationValidation {
    toGenerate(withMask?: boolean): string;
    validate(value: string): boolean;
    private calculateCheckDigit;
}
