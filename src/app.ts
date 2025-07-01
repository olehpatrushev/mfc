import "@babylonjs/inspector";
import {RouterService} from "./services/RouterService";
import {SceneService} from "./services/SceneService";
import {CameraService} from "./services/CameraService";
import {KeyboardService} from "./services/KeyboardService";

const routerService = new RouterService();

const sceneService = new SceneService(
    document.getElementById("renderCanvas"),
    document.getElementById("loadingScreen")
);

await sceneService.init();

if (routerService.getIsDEBUG()) {
    sceneService.showDebugLayer();
}

const cameraService = new CameraService(
    sceneService.getEngine(),
    sceneService.getScene()
)

cameraService.init();

const keyboardService = new KeyboardService(
    sceneService.getScene()
)

keyboardService.init();
keyboardService.setupLocale('ru');

window.addEventListener("resize", () => {
    sceneService.onResize()
    cameraService.onResize()
});