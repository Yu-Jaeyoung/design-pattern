import {Command} from "./interface/Command";
import {Light} from "./Light";

export class LightOnCommand implements Command {
    Name: string = "LightOnCommand";
    light: Light;

    constructor(light: Light) {
        this.light = light;
    }

    execute(): void {
        this.light.on();
    }

    undo(): void {
        this.light.off()
    }
}