import {Command} from "./interface/Command";
import {GarageDoor} from "./GarageDoor";

export class GarageDoorUpCommand implements Command {
    Name: string = "GarageDoorUpCommand";

    garageDoor: GarageDoor;

    constructor(garageDoor: GarageDoor) {
        this.garageDoor = garageDoor;
    }

    execute(): void {
        this.garageDoor.up();
    }

    undo(): void {
        this.garageDoor.down();
    }
}