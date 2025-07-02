export class KeyPressedEvent {
    private readonly char: string;
    private readonly specialChar: string;

    constructor(char, specialChar) {
        this.char = char;
        this.specialChar = specialChar;
    }

    getChar(): string | undefined {
        return this.char;
    }

    getSpecialChar(): string | undefined {
        return this.specialChar;
    }
}