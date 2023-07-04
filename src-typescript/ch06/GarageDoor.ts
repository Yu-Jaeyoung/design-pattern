export class GarageDoor {

    place: string;

    constructor(place: string) {
        this.place = place;
    }


    up(): void {
        console.log("차고 문이 열렸습니다.");
    }

    down(): void {
        console.log("차고 문이 닫혔습니다.");
    }
}