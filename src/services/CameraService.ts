import {
    Vector3,
    ArcRotateCamera,
    Scene,
    Engine,
    TransformNode,
    Node
} from "@babylonjs/core";
import {CameraTarget} from "./camera/CameraTarget";
import {KeyboardCameraTarget} from "./camera/targets/KeyboardCameraTarget";

export class CameraService {
    private engine: Engine;
    private scene: Scene;
    private camera: ArcRotateCamera;
    private cameraTarget: CameraTarget;

    constructor(
        engine: Engine,
        scene: Scene,
    ) {
        this.engine = engine;
        this.scene = scene;
    }

    init() {
        // Настройка камеры
        this.camera = new ArcRotateCamera("camera", Math.PI / 2, Math.PI / 2.5, 6, Vector3.Zero(), this.scene);
        this.camera.attachControl(this.engine.getInputElement(), true);
        this.camera.lowerRadiusLimit = 0;
        this.camera.upperRadiusLimit = 80;
        this.camera.wheelDeltaPercentage = 0.01;
        this.camera.minZ = 0;

        this.setCameraTarget(new KeyboardCameraTarget());
        this.updateCameraRadius();
    }

    setCameraTarget(target: CameraTarget): void {
        let node: Node | null = target.getNode();

        if (node == null) {
            node = this.scene.getNodeById(target.getNodeId())

            if (!(node instanceof TransformNode)) {
                console.warn(`Node with id "${target.getNodeId()}" not found or is not a TransformNode`);
                return;
            }

            target.setNode(node)
        }

        const {min, max} = node.getHierarchyBoundingVectors(true);
        const size = max.subtract(min);
        const targetPosition = min.add(max).scale(0.5);

        target.setSize(size);
        target.setPosition(targetPosition);

        this.cameraTarget = target;
        this.camera.setPosition(targetPosition.add(target.getCameraOffset()))
        this.camera.setTarget(targetPosition)
    }

    updateCameraRadius(): void {
        if (this.cameraTarget) {
            const size = this.cameraTarget.getSize();

            const fov = this.camera.fov; // Обычно ~0.8 (в радианах)
            const aspect = this.engine.getRenderWidth() / this.engine.getRenderHeight();

            // Для вертикального обзора
            const radiusY = size.y / 2 / Math.sin(fov / 2);
            // Для горизонтального обзора (учитываем aspect)
            const horizontalFOV = 2 * Math.atan(Math.tan(fov / 2) * aspect);
            const radiusX = size.x / 2 / Math.sin(horizontalFOV / 2);

            // debugger
            const optimalRadius = Math.max(radiusX, radiusY);

            this.camera.radius = optimalRadius * 1.6; // Небольшой запас (10%)
        } else {
            this.camera.setTarget(Vector3.Zero());
        }
    }

    onResize(): void {
        this.updateCameraRadius();
    }
}