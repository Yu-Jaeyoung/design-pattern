import {Command} from "./interface/Command";
import {NoCommand} from "./NoCommand";

export class RemoteControlWithUndo {
    onCommand: Command[] = [];
    offCommand: Command[] = [];

    undoCommand: Command;

    noCommand: Command = new NoCommand();


    constructor() {
        for (let i: number = 0; i < 7; i++) {
            this.onCommand[i] = this.noCommand;
            this.offCommand[i] = this.noCommand;
        }
        this.undoCommand = this.noCommand;
    }

    setCommands(slot: number, onCommand: Command, offCommand: Command): void {
        this.onCommand[slot] = onCommand;
        this.offCommand[slot] = offCommand;
    }

    onButtonWasPushed(slot: number): void {
        this.onCommand[slot].execute();
        this.undoCommand = this.onCommand[slot];
    }

    offButtonWasPushed(slot: number): void {
        this.offCommand[slot].execute();
        this.undoCommand = this.offCommand[slot];
    }

    undoButtonWasPushed(): void {
        this.undoCommand.undo();
    }

    className(): void {
        console.log("\n------------------------- 리모콘 -------------------------")
        for (let i: number = 0; i < this.onCommand.length; i++) {
            console.log(`[slot ${i}] ${this.onCommand[i].Name}` + "       " + `${this.offCommand[i].Name}`)
        }
        console.log("[undo] " + `${this.undoCommand.Name}` + "\n");
    }
}