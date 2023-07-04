import {RemoteControl} from "./RemoteControl";
import {Light} from "./Light";
import {CeilingFan} from "./CeilingFan";
import {Stereo} from "./Stereo";
import {LightOnCommand} from "./LightOnCommand";
import {CeilingFanOnCommand} from "./CeilingFanOnCommand";
import {CeilingFanOffCommand} from "./CeilingFanOffCommand";
import {StereoOnWithCdCommand} from "./StereoOnWithCdCommand";
import {StereoOffCommand} from "./StereoOffCommand";
import {RemoteControlWithUndo} from "./RemoteControlWithUndo";
import {LightOffCommand} from "./LightOffCommand";
import {CeilingFanMediumCommand} from "./CeilingFanMediumCommand";
import {CeilingFanHighCommand} from "./CeilingFanHighCommand";

class RemoteLoader {
    static main(): void {
        const remoteControl: RemoteControl = new RemoteControl();

        const livingRoomLight: Light = new Light("Living Room");
        const kitchenLight: Light = new Light("Kitchen");
        const ceilingFan: CeilingFan = new CeilingFan("LivingRoom");
        const stereo: Stereo = new Stereo("LivingRoom");

        const livingRoomLightOn: LightOnCommand = new LightOnCommand(livingRoomLight);
        const livingRoomLightOff: LightOffCommand = new LightOffCommand(livingRoomLight);
        const kitchenLightOn: LightOnCommand = new LightOnCommand(kitchenLight);
        const kitchenLightOff: LightOffCommand = new LightOffCommand(kitchenLight);

        const ceilingFanOn: CeilingFanOnCommand = new CeilingFanOnCommand(ceilingFan);
        const ceilingFanOff: CeilingFanOffCommand = new CeilingFanOffCommand(ceilingFan);

        const stereoOnWithCd: StereoOnWithCdCommand = new StereoOnWithCdCommand(stereo);
        const stereoOff: StereoOffCommand = new StereoOffCommand(stereo);

        remoteControl.setCommands(0, livingRoomLightOn, livingRoomLightOff);
        remoteControl.setCommands(1, kitchenLightOn, kitchenLightOff);
        remoteControl.setCommands(2, ceilingFanOn, ceilingFanOff);
        remoteControl.setCommands(3, stereoOnWithCd, stereoOff);

        remoteControl.className();

        remoteControl.onButtonWasPushed(0);
        remoteControl.offButtonWasPushed(0);
        remoteControl.onButtonWasPushed(1);
        remoteControl.offButtonWasPushed(1);
        remoteControl.onButtonWasPushed(2);
        remoteControl.offButtonWasPushed(2);
        remoteControl.onButtonWasPushed(3);
        remoteControl.offButtonWasPushed(3);
    }

    static main2(): void {
        const remoteControl: RemoteControlWithUndo = new RemoteControlWithUndo();

        const livingRoomLight: Light = new Light("Living Room");

        const livingRoomLightOn: LightOnCommand = new LightOnCommand(livingRoomLight);
        const livingRoomLightOff: LightOffCommand = new LightOffCommand(livingRoomLight);

        remoteControl.setCommands(0, livingRoomLightOn, livingRoomLightOff);

        remoteControl.onButtonWasPushed(0);
        remoteControl.offButtonWasPushed(0);
        remoteControl.className();
        remoteControl.undoButtonWasPushed();
        remoteControl.offButtonWasPushed(0);
        remoteControl.onButtonWasPushed(0);
        remoteControl.className();
        remoteControl.undoButtonWasPushed();
    }

    static main3(): void {
        const remoteControl: RemoteControlWithUndo = new RemoteControlWithUndo();

        const ceilingFan: CeilingFan = new CeilingFan("Living Room");

        const ceilingFanMedium: CeilingFanMediumCommand = new CeilingFanMediumCommand(ceilingFan);
        const ceilingFanHigh: CeilingFanHighCommand = new CeilingFanHighCommand(ceilingFan);
        const ceilingFanOff: CeilingFanOffCommand = new CeilingFanOffCommand(ceilingFan);

        remoteControl.setCommands(0, ceilingFanMedium, ceilingFanOff);
        remoteControl.setCommands(1, ceilingFanHigh, ceilingFanOff);

        remoteControl.onButtonWasPushed(0);
        remoteControl.offButtonWasPushed(0);
        remoteControl.className();
        remoteControl.undoButtonWasPushed();

        remoteControl.onButtonWasPushed(1);
        remoteControl.className();
        remoteControl.undoButtonWasPushed();
    }
}

// RemoteLoader.main();
// RemoteLoader.main2();
RemoteLoader.main3();