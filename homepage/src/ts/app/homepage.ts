import {Application} from "../../../../framework/application/application";
import {Renderer} from "../../../../framework/rendering/renderer";
import {Color} from "../../../../framework/rendering/color";

export class Homepage extends Application {


    init() {
        Renderer.setBackgroundColor("28671c");
        Renderer.setRenderLoop(this.loop);
        Renderer.renderLoop();
    }

    loop() {
        Renderer.beginPath();

        Renderer.setColor(new Color(255,255,255));
        Renderer.rect(0,64, 65,56);

        Renderer.fillAndClosePath();

    }
}
