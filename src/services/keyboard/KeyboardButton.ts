import {KeyboardButtonOptionsInterface} from "./KeyboardButtonOptionsInterface";

export class KeyboardButton {
    options: KeyboardButtonOptionsInterface

    constructor(options: KeyboardButtonOptionsInterface) {
        this.options = options;
    }
}