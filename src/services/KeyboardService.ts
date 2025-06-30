import * as GUI from '@babylonjs/gui'
import {ArcRotateCamera, Engine, Mesh, Scene, TransformNode} from "@babylonjs/core";
import {CameraTarget} from "./camera/CameraTarget";

export class KeyboardService {
    private scene: Scene;

    buttonsMap

    constructor(
        scene: Scene
    ) {
        this.scene = scene;
    }

    init() {
        this.scene.getNodeById('Send')?.setEnabled(false);
        const sendButtonPosition = (this.scene.getNodeById('Cube.001') as TransformNode)?.position;
        this.scene.getNodeById('')
    }
}