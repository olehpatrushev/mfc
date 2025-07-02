import {KeyPressedEvent} from "./keyboard/events/KeyPressedEvent";

export class MessageService {
    constructor() {
    }

    processKeyPressed(event: KeyPressedEvent) {
        console.log(event);
    }
}