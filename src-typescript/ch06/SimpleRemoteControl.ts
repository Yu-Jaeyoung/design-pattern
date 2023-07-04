import {Command} from "./interface/Command";

export class SimpleRemoteControl {
    slot: Command | null = null;

    constructor() {
    }

    setCommand(command: Command): void {
        this.slot = command;
    }

    buttonWasPressed(): void {
        if (this.slot) {
            this.slot.execute();
        }
    }
}