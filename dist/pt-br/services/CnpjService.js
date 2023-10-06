"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CnpjService = void 0;
class CnpjService {
    constructor() {
        this.weights = [[5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2], [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]];
    }
    toGenerate(withMask = false) {
        let value = Array.from({ length: 12 }, () => Math.floor(Math.random() * 10));
        for (let w of this.weights) {
            let sum = value.reduce((acc, cur, i) => acc + cur * w[i], 0);
            value.push((sum % 11 < 2) ? 0 : (11 - sum % 11));
        }
        return withMask ? value.join('').replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5") : value.join('');
    }
    validate(value) {
        value = value.replace(/\D/g, '');
        if (value.length !== 14 || /^(\d)\1+$/.test(value))
            return false;
        for (let j = 0; j < 2; j++) {
            let sum = Array.from(value.substr(0, 12 + j), (v, i) => Number(v) * this.weights[j][i]).reduce((acc, cur) => acc + cur);
            if (Number(value.charAt(12 + j)) !== ((sum % 11 < 2) ? 0 : (11 - sum % 11)))
                return false;
        }
        return true;
    }
}
exports.CnpjService = CnpjService;
