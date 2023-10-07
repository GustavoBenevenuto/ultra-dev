"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PalindromeService = void 0;
class PalindromeService {
    static toGenerate(withMask = false) {
        const alphabet = "abcdefghijklmnopqrstuvwxyz";
        const size = Math.floor(Math.random() * 10) + 5;
        let palindrome = "";
        for (let i = 0; i < size; i++) {
            palindrome += alphabet[Math.floor(Math.random() * alphabet.length)];
        }
        return palindrome + palindrome.split("").reverse().join("");
    }
    static validate(value) {
        const reversedText = value.toLocaleLowerCase().split("").reverse().join("");
        return value === reversedText;
    }
}
exports.PalindromeService = PalindromeService;
