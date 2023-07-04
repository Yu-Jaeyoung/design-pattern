import {Command} from "./interface/Command";
import {Stereo} from "./Stereo";

export class StereoOffCommand implements Command {
    Name:string = "StereoOffCommand";
    stereo: Stereo;

    constructor(stereo: Stereo) {
        this.stereo = stereo;
    }

    execute() {
        this.stereo.off();
    }

    undo(): void {
        this.stereo.on();
        this.stereo.setCd();
        this.stereo.setVolume(11);
    }
}