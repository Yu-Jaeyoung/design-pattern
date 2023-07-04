import {Command} from "./interface/Command";
import {Light} from "./Light";

export class LightOffCommand implements Command {
    Name: string = "LightOffCommand";

    light: Light;

    constructor(light: Light) {
        this.light = light;
    }

    execute() {
        this.light.off();
    }

    undo(): void {
        this.light.on();
    }
}