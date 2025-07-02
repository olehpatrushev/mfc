import "@babylonjs/inspector";
import {RouterService} from "./services/RouterService";
import {SceneService} from "./services/SceneService";
import {CameraService} from "./services/CameraService";
import {KeyboardService} from "./services/KeyboardService";
import {MessageService} from "./services/MessageService";

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

const messageService = new MessageService();

keyboardService.onKeyPressed.add((event) => messageService.processKeyPressed(event));

window.addEventListener("resize", () => {
    sceneService.onResize()
    cameraService.onResize()
});