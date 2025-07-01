import {
    DynamicTexture,
    Mesh,
    MeshBuilder,
    Node,
    Scene,
    StandardMaterial, TransformNode,
    Vector3
} from "@babylonjs/core";
import * as KeyboardLayouts from "./keyboard/layouts";
import {KeyboardLayout} from "./keyboard/KeyboardLayout";
import {KeyboardButton} from "./keyboard/KeyboardButton";

export class KeyboardService {
    private scene: Scene;

    private firstButtonPosition: Vector3 = new Vector3(-225, 67.5, 0);
    private lastButtonPosition: Vector3 = new Vector3(270, -112.5, 0);
    private offset: Vector3;

    private rowsNodes = {};
    private keyboardNode: Node;
    private layouts = {};

    private readonly buttonSize = {
        width: 38,
        height: 52
    }

    constructor(
        scene: Scene
    ) {
        this.scene = scene;
    }

    init() {
        this.scene.getNodeById('Send')?.setEnabled(false);
        this.scene.getNodeById('Key').getChildren().forEach(entry => entry.setEnabled(false));

        this.keyboardNode = new TransformNode("Buttons Container");
        this.keyboardNode.parent = this.scene.getNodeById('Key');

        this.offset = this.lastButtonPosition.subtract(this.firstButtonPosition);
        this.offset.x = this.offset.x / 11;
        this.offset.y = this.offset.y / 3;
    }

    protected hideAllButtons() {
        this.keyboardNode.getChildren().forEach(entry => entry.setEnabled(false));
    }

    protected createLayout(locale) {
        let foundLayoutClass;
        for (const [localeClassName, layoutClass] of Object.entries(KeyboardLayouts)) {
            if (layoutClass.LOCALE == locale) {
                foundLayoutClass = layoutClass;
            }
        }
        if (!foundLayoutClass) {
            console.warn(`Class for locale "${locale}" not found`);
            return;
        }

        const layout: KeyboardLayout = new foundLayoutClass;

        foundLayoutClass.BUTTONS_OPTIONS.forEach((options) => {
            let {width, height} = this.buttonSize;


            if (options.columnsCount > 1) {
                width += this.offset.x * options.columnsCount;
            }

            if (options.rowsCount > 1) {
                height += this.offset.y * options.rowsCount;
            }

            const mesh: Mesh = MeshBuilder.CreatePlane("button", {
                width,
                height
            }, this.scene);
            const button = new KeyboardButton(options, mesh);
            mesh.setParent(this.keyboardNode);

            const position = this.firstButtonPosition.clone();
            position.x += (options.columnIndex + (options.columnsCount || 1 - 1) / 2) * this.offset.x;
            position.y += (options.rowIndex + (options.rowsCount || 1 - 1) / 2) * this.offset.y;
            position.z = 10;

            mesh.position.copyFrom(position);
            mesh.rotation.set(0, Math.PI, 0);
            mesh.scaling.set(-1, 1, 1);

            const material = new StandardMaterial("buttonMat", this.scene);
            material.specularColor.setAll(0);
            material.emissiveColor.setAll(1);
            const dynamicTexture = new DynamicTexture("dynamicTexture", {
                width: width * 2,
                height: height * 2
            }, this.scene, false);
            material.diffuseTexture = dynamicTexture;
            mesh.material = material;

            const ctx = dynamicTexture.getContext() as CanvasRenderingContext2D;
            ctx.fillStyle = "#CCC"; // Цвет фона клавиши
            ctx.fillRect(0, 0, width * 2, height * 2);

            ctx.font = `bold ${Math.min(width, height)}px Arial`;
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";

            let text: string;
            if (options.char) {
                text = options.char;
            } else {
                switch (options.specialChar) {
                    case KeyboardButton.SPECIAL_CHAR_NUMBERS:
                        text = '123';
                        break;
                    case KeyboardButton.SPECIAL_CHAR_SHIFT:
                        text = '↑';
                        break;
                    case KeyboardButton.SPECIAL_CHAR_BACKSPACE:
                        text = '←';
                        break;
                    case KeyboardButton.SPECIAL_CHAR_SPACE:
                        text = locale;
                        break;
                }
            }

            ctx.fillText(text, width, height); // Тут символ

            dynamicTexture.update();

            mesh.setEnabled(false);

            layout.addButton(button);
        })

        return this.layouts[locale] = layout;
    }

    setupLocale(locale) {
        const layout = this.layouts[locale] || this.createLayout(locale);

        if (!layout) {
            return;
        }

        this.hideAllButtons();

        layout.getButtons().forEach((button: KeyboardButton) => {
            button.getMesh().setEnabled(true);
        });
    }
}