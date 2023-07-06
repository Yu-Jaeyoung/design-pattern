import {Amplifier} from "./Amplifier";
import {Tuner} from "./Tuner";
import {StreamingPlayer} from "./StreamingPlayer";
import {Projector} from "./Projector";
import {Screen} from "./Screen";
import {TheaterLights} from "./TheaterLights";
import {PopcornPopper} from "./PopcornPopper";
import {HomeTheaterFacade} from "./HomeTheaterFacade";

class HomeTheaterTestDrive {
    static main(): void {
        const amp: Amplifier = new Amplifier();
        const tuner: Tuner = new Tuner();
        const player: StreamingPlayer = new StreamingPlayer();
        const projector: Projector = new Projector();
        const screen: Screen = new Screen();
        const lights: TheaterLights = new TheaterLights();
        const popper: PopcornPopper = new PopcornPopper();

        const homeTheater: HomeTheaterFacade = new HomeTheaterFacade(amp, tuner, player, projector, screen, lights, popper);

        homeTheater.watchMovie("인디아나 존스:레이더스");
        homeTheater.endMovie();
    }
}

HomeTheaterTestDrive.main();