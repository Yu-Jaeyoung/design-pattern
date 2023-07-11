import * as readline from 'readline';

abstract class caffeineBeverage {
    async prepareRecipe(): Promise<void> {
        this.boilWater();
        this.brew();
        this.pourInCup();
        if (await this.customerWantsCondiments()) {
            this.addCondiments();
        }
    }
    // Java와 다르게 TypeScript에는 final 선언이 없는것으로 파악됨
    // 해당 처리를 위해서는 새로운 작업이 필요해보임

    abstract brew(): void;

    abstract addCondiments(): void;

    boilWater(): void {
        console.log("물 끓이는 중");
    }

    pourInCup(): void {
        console.log("컵에 따르는 중")
    }

    customerWantsCondiments(): boolean {
        return true;
    }
}

class coffeeWithHook extends caffeineBeverage {

    brew(): void {
        console.log("필터로 커피 우려내는 중");
    }

    addCondiments(): void {
        console.log("우유와 설탕을 추가하는 중");
    }

    // @ts-ignore
    customerWantsCondiments(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.getUserInput()
                .then((input: string): void => {
                    if (input === 'y') {
                        resolve(true);
                    } else if (input === 'n') {
                        resolve(false);
                    } else {
                        new Error("Error");
                    }
                })
        });
    }

    // getUserInput(): Promise<string> {
    //     return new Promise((resolve, reject) => {
    //         const readLine: readline.Interface = readline.createInterface({
    //             input: process.stdin,
    //             output: process.stdout
    //         });
    //         readLine.question("커피에 우유와 설탕을 넣을까요? (y/n) ", (input: string): void => {
    //             if (input !== 'y' && input !== 'n') {
    //                 reject(new Error("Invalid input. Please enter 'y' or 'n'."));
    //             } else {
    //                 resolve(input);
    //             }
    //             readLine.close();
    //         })
    //     });
    // }

    getUserInput(): Promise<any> {
        return new Promise((resolve, reject): void => {
            const readLine: readline.Interface = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });
            readLine.question("커피에 우유와 설탕을 넣을까요? (y/n) ", (input: string): void => {
                if (input !== 'y' && input !== 'n') {
                    readLine.close();
                    reject(new Error("Invalid input. Please enter 'y' or 'n'."));
                } else {
                    readLine.close();
                    resolve(input);
                }
            });
        }).catch((error: Error) => {
            console.error("An error occurred:", error.message);
            return this.getUserInput();
        });
    }

}

class TeaWithHook extends caffeineBeverage {

    brew(): void {
        console.log("찻잎을 우려내는 중");
    }

    addCondiments(): void {
        console.log("레몬을 추가하는 중");
    }

    // @ts-ignore
    customerWantsCondiments(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.getUserInput()
                .then((input: string): void => {
                    if (input === 'y') {
                        resolve(true);
                    } else if (input === 'n') {
                        resolve(false);
                    } else {
                        new Error("Error");
                    }
                })
        });
    }

    // getUserInput(): Promise<string> {
    //     return new Promise((resolve, reject) => {
    //         const readLine: readline.Interface = readline.createInterface({
    //             input: process.stdin,
    //             output: process.stdout
    //         });
    //         readLine.question("커피에 우유와 설탕을 넣을까요? (y/n) ", (input: string): void => {
    //             if (input !== 'y' && input !== 'n') {
    //                 reject(new Error("Invalid input. Please enter 'y' or 'n'."));
    //             } else {
    //                 resolve(input);
    //             }
    //             readLine.close();
    //         })
    //     });
    // }

    getUserInput(): Promise<any> {
        return new Promise((resolve, reject): void => {
            const readLine: readline.Interface = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });
            readLine.question("홍차에 레몬을 넣을까요? (y/n) ", (input: string): void => {
                if (input !== 'y' && input !== 'n') {
                    readLine.close();
                    reject(new Error("Invalid input. Please enter 'y' or 'n'."));
                } else {
                    readLine.close();
                    resolve(input);
                }
            });
        }).catch((error: Error) => {
            console.error("An error occurred:", error.message);
            return this.getUserInput();
        });
    }

}

class beverageTestDrive {
    static async main(): Promise<void> {
        const tea: TeaWithHook = new TeaWithHook();
        console.log("\n홍차 준비중");
        await tea.prepareRecipe();

        const coffee: coffeeWithHook = new coffeeWithHook();
        console.log("\n커피 준비중");
        await coffee.prepareRecipe();
    }
}

beverageTestDrive.main();