import {Command} from "./interface/Command";

export class MacroCommand implements Command {
    Name: string = "MacroCommand"

    commands: Command[] = [];

    constructor(commands: Command[]) {
        this.commands = commands;
    }

    execute(): void {
        for (let i: number = 0; i < this.commands.length; i++) {
            this.commands[i].execute();
        }
    }

    undo(): void {
        for (let i: number = this.commands.length; i >= 0; i--) {
            this.commands[i].undo();
        }
    }
}