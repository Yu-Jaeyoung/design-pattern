import {Duck} from "./Duck";

export class MallardDuck implements Duck {
    quack(): void {
        console.log("꽥");
    }

    fly(): void {
        console.log("날고 있어요!!")
    }
}