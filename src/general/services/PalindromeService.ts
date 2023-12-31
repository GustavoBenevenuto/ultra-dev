export class PalindromeService {
    static toGenerate(): string | Promise<string> {
        const alphabet = "abcdefghijklmnopqrstuvwxyz";
        const size = Math.floor(Math.random() * 10) + 5;
        let palindrome = "";

        for (let i = 0; i < size; i++) {
            palindrome += alphabet[Math.floor(Math.random() * alphabet.length)];
        }

        return palindrome + palindrome.split("").reverse().join("");
    }

    static validate(value: string): boolean | Promise<boolean> {
        const reversedText = value.toLocaleLowerCase().split("").reverse().join("");
        return value === reversedText;
    }
}