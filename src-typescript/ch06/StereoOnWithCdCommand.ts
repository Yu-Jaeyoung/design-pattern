import {Command} from "./interface/Command";
import {Stereo} from "./Stereo";

export class StereoOnWithCdCommand implements Command {
    Name: string = "StereoOnWithCommand";
    stereo: Stereo;

    constructor(stereo: Stereo) {
        this.stereo = stereo;
    }

    execute(): void {
        this.stereo.on();
        this.stereo.setCd();
        this.stereo.setVolume(11);
    }

    undo(): void {
     this.stereo.off();
    }
}