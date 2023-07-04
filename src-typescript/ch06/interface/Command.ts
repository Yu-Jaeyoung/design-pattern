export interface Command {
    readonly Name: string;

    execute(): void;
    undo(): void;
}