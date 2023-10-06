// ultra-dev-custom.d.ts
declare module 'ultra-dev' {
    export class PalindromeService {
        toGenerate(withMask?: boolean): Promise<string> | string;
        validate(value: string): Promise<boolean> | boolean;
    }
    export class CpfService {
        toGenerate(withMask?: boolean): Promise<string> | string;
        validate(value: string): Promise<boolean> | boolean;
    }
    export class CnpjService {
        toGenerate(withMask?: boolean): Promise<string> | string;
        validate(value: string): Promise<boolean> | boolean;
    }
}