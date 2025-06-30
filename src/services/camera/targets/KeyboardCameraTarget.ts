import {CameraTarget} from "../CameraTarget";
import {Vector3} from "@babylonjs/core";

export class KeyboardCameraTarget extends CameraTarget {
    protected nodeId: string = 'Keyboard / Default state'
    protected cameraOffset: Vector3 = new Vector3(0.1, 0.3, 0)
}