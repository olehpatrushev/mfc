import {TransformNode, Vector3} from "@babylonjs/core";

export class CameraTarget {
    protected nodeId: string;
    protected node: TransformNode;
    protected cameraOffset: Vector3;
    protected size: Vector3;
    protected position: Vector3;

    getNodeId(): string {
        return this.nodeId;
    }

    setNode(node: TransformNode): void {
        this.node = node;
    }

    getNode(): TransformNode | null {
        return this.node;
    }

    setCameraOffset(cameraOffset: Vector3): void {
        this.cameraOffset = cameraOffset;
    }

    getCameraOffset(): Vector3 {
        return this.cameraOffset;
    }

    setSize(size: Vector3): void {
        this.size = size;
    }

    getSize(): Vector3 {
        return this.size;
    }

    setPosition(position: Vector3): void {
        this.position = position;
    }

    getPosition(): Vector3 {
        return this.position;
    }
}