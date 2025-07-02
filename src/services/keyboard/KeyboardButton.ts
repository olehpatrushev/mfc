import {KeyboardButtonOptionsInterface} from "./KeyboardButtonOptionsInterface";
import {AbstractMesh} from "@babylonjs/core";

export class KeyboardButton {
    static SPECIAL_CHAR_NUMBERS = 'numbers';
    static SPECIAL_CHAR_SHIFT = 'shift';
    static SPECIAL_CHAR_BACKSPACE = 'backspace';
    static SPECIAL_CHAR_SPACE = 'space';

    private readonly options: KeyboardButtonOptionsInterface
    private readonly mesh: AbstractMesh;

    constructor(options: KeyboardButtonOptionsInterface, mesh: AbstractMesh) {
        this.options = options;
        this.mesh = mesh;
    }

    getMesh(): AbstractMesh {
        return this.mesh;
    }

    getOptions(): KeyboardButtonOptionsInterface {
        return this.options;
    }
}