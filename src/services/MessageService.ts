import {KeyPressedEvent} from "./keyboard/events/KeyPressedEvent";
import {KeyboardButton} from "./keyboard/KeyboardButton";

export class MessageService {
    private message = '';

    constructor() {
    }

    processKeyPressed(event: KeyPressedEvent) {
        if (event.getChar()) {
            this.message += '' + event.getChar();
        } else if (event.getSpecialChar()) {
            switch (event.getSpecialChar()) {
                case KeyboardButton.SPECIAL_CHAR_SPACE:
                    this.message += ' ';
                    break;
                case KeyboardButton.SPECIAL_CHAR_BACKSPACE:
                    this.message = this.message.slice(0, -1);
                    break;
            }
        }

        console.log(`Message changed: "${this.message}"`)
    }
}