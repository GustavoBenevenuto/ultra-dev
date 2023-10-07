"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RgService = void 0;
class RgService {
    static toGenerate(withMask = false) {
        let rg = '';
        for (let i = 0; i < 8; i++) {
            rg += Math.floor(Math.random() * 10);
        }
        rg += this.calculateCheckDigit(rg);
        while (!this.validate(rg)) {
            this.toGenerate(withMask);
        }
        return withMask ? this.applyMask(rg) : rg;
    }
    static validate(value) {
        const numberRg = value.replace(/\D/g, '');
        if (numberRg.length !== 8 && numberRg.length !== 9) {
            return false;
        }
        if (numberRg.length === 9) {
            const digits = numberRg.split('');
            const d1 = parseInt(digits[0]);
            const d2 = parseInt(digits[1]);
            const d3 = parseInt(digits[2]);
            const d4 = parseInt(digits[3]);
            const d5 = parseInt(digits[4]);
            const d6 = parseInt(digits[5]);
            const d7 = parseInt(digits[6]);
            const d8 = parseInt(digits[7]);
            const d9 = parseInt(digits[8]);
            const sum = d1 * 2 + d2 * 3 + d3 * 4 + d4 * 5 + d5 * 6 + d6 * 7 + d7 * 8 + d8 * 9;
            const rest = sum % 11;
            const verifyingDigit = rest === 0 ? 0 : 11 - rest;
            return d9 === verifyingDigit;
        }
        return true;
    }
    static calculateCheckDigit(rg) {
        let sum = 0;
        for (let i = 0; i < 8; i++) {
            sum += parseInt(rg[i]) * (2 + (i % 8));
        }
        const remainder = sum % 11;
        return remainder < 2 ? 0 : 11 - remainder;
    }
    static applyMask(rg) {
        return `${rg.slice(0, 2)}.${rg.slice(2, 5)}.${rg.slice(5, 8)}-${rg.slice(8)}`;
    }
}
exports.RgService = RgService;
