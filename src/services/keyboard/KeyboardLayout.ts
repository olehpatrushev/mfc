import {KeyboardButtonOptionsInterface} from "./KeyboardButtonOptionsInterface";

export class KeyboardLayout {
    protected charsMappings: [KeyboardButtonOptionsInterface];
    protected locale: string;

    static SPECIAL_CHAR_NUMBERS = 'numbers';
    static SPECIAL_CHAR_SHIFT = 'shift';
    static SPECIAL_CHAR_BACKSPACE = 'backspace';
    static SPECIAL_CHAR_SPACE = 'space';
}