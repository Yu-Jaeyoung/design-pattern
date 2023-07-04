package ch06;

public class RemoteLoaderWithMacro {

    public static void main(String[] args) {
        RemoteControlWithUndo remoteControl = new RemoteControlWithUndo();
        Light light = new Light("Living Room");
        GarageDoor garageDoor = new GarageDoor("Living Room");
        Stereo stereo = new Stereo("Living Room");

        LightOnCommand lightOn = new LightOnCommand(light);
        GarageDoorUpCommand garageDoorUp = new GarageDoorUpCommand(garageDoor);
        StereoOnWithCdCommand stereoOn = new StereoOnWithCdCommand(stereo);

        LightOffCommand lightOff = new LightOffCommand(light);
        GarageDoorDownCommand garageDoorDown = new GarageDoorDownCommand(garageDoor);
        StereoOffCommand stereoOff = new StereoOffCommand(stereo);

        Command[] partyOn = {lightOn, stereoOn, garageDoorUp};
        Command[] partyOff = {lightOff, stereoOff, garageDoorDown};

        MacroCommand partyOnMacro = new MacroCommand(partyOn);
        MacroCommand partyOffMacro = new MacroCommand(partyOff);

        remoteControl.setCommands(0, partyOnMacro, partyOffMacro);

        System.out.println(remoteControl);
        System.out.println("--- 메크로 ON ---");
        remoteControl.onButtonWasPushed(0);
        System.out.println("--- 메크로 OFF ---");
        remoteControl.offButtonWasPushed(0);
    }
}
