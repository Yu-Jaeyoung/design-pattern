import {Turkey} from "./Turkey";

export class WildTurkey implements Turkey {
    gobble(): void {
        console.log("골골");
    }

    fly(): void {
        console.log("짧은 거리를 날고 있어요!")
    }
}