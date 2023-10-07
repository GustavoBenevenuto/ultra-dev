import { IBaseGenerationValidation } from "../../interfaces/IBaseGenerationValidation";
export declare class PalindromeService implements IBaseGenerationValidation {
    toGenerate(withMask?: boolean): string | Promise<string>;
    validate(value: string): boolean | Promise<boolean>;
}
