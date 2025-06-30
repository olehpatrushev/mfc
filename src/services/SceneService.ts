import {
    ArcRotateCamera,
    Database,
    Engine,
    HemisphericLight,
    ImportMeshAsync,
    Scene,
    Vector3,
    TransformNode
} from "@babylonjs/core";
import "@babylonjs/loaders/glTF/2.0";
import {Debug} from "@babylonjs/core/Legacy/legacy";

export class SceneService {
    private canvasEl;
    private loadingScreenEl;
    private engine: Engine;
    private scene: Scene;
    private camera;

    constructor(canvasEl, loadingScreenEl) {
        this.canvasEl = canvasEl;
        this.loadingScreenEl = loadingScreenEl;
    }

    async init() {
        Database.IDBStorageEnabled = true;

        this.engine = new Engine(this.canvasEl, true);
        this.engine.enableOfflineSupport = true;

        await this.createScene();

        this.engine.runRenderLoop(() => this.scene.render());
    }

    showDebugLayer() {
        this.scene.debugLayer.show();
        new Debug.AxesViewer(this.scene, 1);

        window["scene"] = this.scene
        window["camera"] = this.camera
    }

    getScene(): Scene {
        return this.scene;
    }

    getEngine(): Engine {
        return this.engine;
    }

    onResize(): void {
        this.engine.resize();
    }

    async createScene(): Promise<void> {
        this.scene = new Scene(this.engine);

        // Добавление освещения
        const light = new HemisphericLight("light", new Vector3(0, 1, 0), this.scene);
        light.intensity = 0.7;


        // Загрузка модели
        try {
            const result = await ImportMeshAsync("models/mfc_v_1_copy.glb", this.scene);

            // Оборачиваем в TransformNode
            const rootWrapper = new TransformNode("rootWrapper", this.scene);
            result.meshes.forEach(mesh => {
                if (!mesh.parent) mesh.parent = rootWrapper;
            });

            // Вычисляем Bounding Box всей модели
            const {min, max} = rootWrapper.getHierarchyBoundingVectors(true);
            const size = max.subtract(min);
            const maxDim = Math.max(size.x, size.y, size.z);

            // Масштаб до заданного размера
            const desiredSize = 3;
            const scale = desiredSize / maxDim;
            rootWrapper.scaling = new Vector3(scale, scale, scale);
            rootWrapper.computeWorldMatrix(true)

            const {min: newMin, max: newMax} = rootWrapper.getHierarchyBoundingVectors(true);
            const newCenter = newMin.add(newMax).scale(0.5);
            rootWrapper.position = rootWrapper.position.subtract(newCenter);

            // Анимации
            this.scene.animationGroups.forEach(group => group.start(true));

            // Скрываем спиннер после загрузки
            console.log("✅ Модель загружена и настроена");
            this.loadingScreenEl.style.display = "none";
        } catch (error) {
            console.error("❌ Ошибка загрузки модели:", error);
            this.loadingScreenEl.innerHTML = `<div style="color: red;">Ошибка загрузки модели: ${error.message}</div>`;
        }
    }
}