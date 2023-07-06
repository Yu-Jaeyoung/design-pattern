import {Duck} from "./Duck";
import {MallardDuck} from "./MallardDuck";
import {TurkeyAdapter} from "./TurkeyAdapter";
import {Turkey} from "./Turkey";
import {WildTurkey} from "./WildTurkey";

class DuckTestDrive {
    static main(): void {
        const duck: Duck = new MallardDuck();
        const turkey: Turkey = new WildTurkey();
        const turkeyAdapter: Duck = new TurkeyAdapter(turkey);

        console.log("칠면조가 말하길");
        turkey.gobble();
        turkey.fly();

        console.log("\n오리가 말하길");
        this.testDuck(duck);

        console.log("\n칠면조 어뎁터가 말하길");
        this.testDuck(turkeyAdapter);
    }

    static testDuck(duck: Duck): void {
        duck.quack();
        duck.fly();
    }
}

DuckTestDrive.main();