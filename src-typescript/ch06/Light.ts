export class Light {

    place: string;

    constructor(place: string) {
        this.place = place;
    }

    on(): void {
        console.log(this.place + " 조명이 켜졌습니다.")
    }

    off(): void {
        console.log(this.place + " 조명이 꺼졌습니다.")
    }
}