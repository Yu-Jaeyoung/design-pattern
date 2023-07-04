import {Command} from "./interface/Command";

export class NoCommand implements Command {
    Name: string = "NoCommand";

    execute() {
        console.log("No Command");
    }

    undo(): void {
        console.log("No Command");
    }
}