import { IBaseGenerationValidation } from "../../interfaces/IBaseGenerationValidation";
export declare class CnpjService implements IBaseGenerationValidation {
    readonly weights: number[][];
    toGenerate(withMask?: boolean): string;
    validate(value: string): boolean;
}
