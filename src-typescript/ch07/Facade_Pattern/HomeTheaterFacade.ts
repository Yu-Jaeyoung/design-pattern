import {Amplifier} from "./Amplifier";
import {Tuner} from "./Tuner";
import {StreamingPlayer} from "./StreamingPlayer";
import {Projector} from "./Projector";
import {TheaterLights} from "./TheaterLights";
import {Screen} from "./Screen";
import {PopcornPopper} from "./PopcornPopper";

export class HomeTheaterFacade {

    amp: Amplifier;
    tuner: Tuner;
    player: StreamingPlayer;
    projector: Projector;
    lights: TheaterLights;
    screen: Screen;
    popper: PopcornPopper;

    constructor(amp: Amplifier, tuner: Tuner, player: StreamingPlayer,
                projector: Projector, screen: Screen, lights: TheaterLights, popper: PopcornPopper) {
        this.amp = amp;
        this.tuner = tuner;
        this.player = player;
        this.projector = projector;
        this.screen = screen;
        this.lights = lights;
        this.popper = popper;
    }


    watchMovie(movie: string): void {
        console.log("영화 볼 준비 중");
        this.popper.on();
        this.popper.pop();
        this.lights.dim(10);
        this.screen.down();
        this.projector.on();
        this.projector.wideScreenMode();
        this.amp.on();
        this.amp.setStreamingPlayer();
        this.amp.setSurroundSound();
        this.amp.setVolume(5);
        this.player.on();
        this.player.play(movie);
    }

    endMovie(): void {
        console.log("홈시어터 끄는 중");
        this.popper.off();
        this.lights.on();
        this.screen.up();
        this.projector.off();
        this.amp.off();
        this.player.stop();
        this.player.off();
    }
}