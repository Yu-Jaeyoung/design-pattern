import {Command} from "./interface/Command";
import {CeilingFan} from "./CeilingFan";

export class CeilingFanOffCommand implements Command {
    Name: string = "CeilingFanOffCommand";
    prevSpeed: number | null = null;

    ceilingFan: CeilingFan;

    constructor(ceilingFan: CeilingFan) {
        this.ceilingFan = ceilingFan;
    }

    execute() {
        this.prevSpeed = this.ceilingFan.getSpeed();
        this.ceilingFan.off();
    }

    undo(): void {
        if (this.prevSpeed == CeilingFan.HIGH) {
            this.ceilingFan.high();
        } else if (this.prevSpeed == CeilingFan.MEDIUM) {
            this.ceilingFan.medium();
        } else if (this.prevSpeed == CeilingFan.LOW) {
            this.ceilingFan.low();
        } else if (this.prevSpeed == CeilingFan.OFF) {
            this.ceilingFan.off();
        }
    }
}