import {Command} from "./interface/Command";
import {CeilingFan} from "./CeilingFan";

export class CeilingFanOnCommand implements Command {
    Name: string = "CeilingFanOnCommand";

    ceilingFan: CeilingFan;

    constructor(ceilingFan: CeilingFan) {
        this.ceilingFan = ceilingFan;
    }

    execute(): void {

    }

    undo(): void {
        this.ceilingFan.off();
    }
}