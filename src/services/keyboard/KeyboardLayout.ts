import {KeyboardButtonOptionsInterface} from "./KeyboardButtonOptionsInterface";
import {KeyboardButton} from "./KeyboardButton";

export class KeyboardLayout {
    static LOCALE: string;
    static BUTTONS_OPTIONS: KeyboardButtonOptionsInterface[];

    protected buttons: KeyboardButton[] = [];

    addButton(button: KeyboardButton): void {
        this.buttons.push(button);
    }

    getButtons(): KeyboardButton[] {
        return this.buttons;
    }
}