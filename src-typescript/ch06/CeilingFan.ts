export class CeilingFan {

    static readonly HIGH: number = 3;
    static readonly MEDIUM: number = 2;
    static readonly LOW: number = 1;
    static readonly OFF: number = 0;

    place: string;
    speed: number;

    constructor(place: string) {
        this.place = place;
        this.speed = CeilingFan.OFF;
    }

    high(): void {
        this.speed = CeilingFan.HIGH;
        console.log(this.place + "의 선풍기 속도가 HIGH로 설정되었습니다.")
    }

    medium(): void {
        this.speed = CeilingFan.MEDIUM;
        console.log(this.place + "의 선풍기 속도가 MEDIUM으로 설정되었습니다.");
    }

    low(): void {
        this.speed = CeilingFan.LOW;
        console.log(this.place + "의 선풍기 속도가 LOW로 설정되었습니다.")
    }

    off(): void {
        this.speed = CeilingFan.OFF;
        console.log(this.place + "의 선풍기의 전원을 끕니다.")
    }

    getSpeed(): number {
        return this.speed;
    }
}