import {Command} from "./interface/Command";
import {GarageDoor} from "./GarageDoor";

export class GarageDoorDownCommand implements Command {
    Name: string = "GarageDoorDownCommand";

    garageDoor: GarageDoor;

    constructor(garageDoor: GarageDoor) {
        this.garageDoor = garageDoor;
    }

    execute() {
        this.garageDoor.down();
    }

    undo(): void {
        this.garageDoor.up();
    }
}