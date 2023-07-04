import {RemoteControlWithUndo} from "./RemoteControlWithUndo";
import {Light} from "./Light";
import {GarageDoor} from "./GarageDoor";
import {Stereo} from "./Stereo";
import {LightOnCommand} from "./LightOnCommand";
import {LightOffCommand} from "./LightOffCommand";
import {GarageDoorUpCommand} from "./GarageDoorUpCommand";
import {GarageDoorDownCommand} from "./GarageDoorDownCommand";
import {StereoOnWithCdCommand} from "./StereoOnWithCdCommand";
import {StereoOffCommand} from "./StereoOffCommand";
import {Command} from "./interface/Command";
import {MacroCommand} from "./MacroCommand";

class RemoteLoaderWithMacro {
    static main(): void {
        const remoteControl: RemoteControlWithUndo = new RemoteControlWithUndo();
        const light: Light = new Light("Living Room");
        const garageDoor: GarageDoor = new GarageDoor("Living Room");
        const stereo: Stereo = new Stereo("Living Room");

        const lightOn: LightOnCommand = new LightOnCommand(light);
        const lightOff: LightOffCommand = new LightOffCommand(light);
        const garageDoorUp: GarageDoorUpCommand = new GarageDoorUpCommand(garageDoor);
        const garageDoorDown: GarageDoorDownCommand = new GarageDoorDownCommand(garageDoor);
        const stereoOnWithCd: StereoOnWithCdCommand = new StereoOnWithCdCommand(stereo);
        const stereoOff: StereoOffCommand = new StereoOffCommand(stereo);

        const partyOn: Command[] = [lightOn, stereoOnWithCd, garageDoorUp];
        const partyOff: Command[] = [lightOff, stereoOff, garageDoorDown];

        const partyOnMacro: MacroCommand = new MacroCommand(partyOn);
        const partyOffMacro: MacroCommand = new MacroCommand(partyOff);

        remoteControl.setCommands(0, partyOnMacro, partyOffMacro);

        remoteControl.className();
        console.log(" --- 메크로 ON --- ");
        remoteControl.onButtonWasPushed(0);
        console.log(" --- 메크로 OFF --- ");
        remoteControl.offButtonWasPushed(0);
    }
}

RemoteLoaderWithMacro.main();