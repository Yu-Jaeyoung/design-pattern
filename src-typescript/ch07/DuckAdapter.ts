import {Turkey} from "./Turkey";
import {Duck} from "./Duck";

export class DuckAdapter implements Turkey {
    duck: Duck;

    constructor(duck: Duck) {
        this.duck = duck;
    }

    gobble(): void {
        this.duck.quack();
    }

    fly(): void {
        this.duck.fly();
    }
}