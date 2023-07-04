export class Stereo {
    place: string;

    constructor(place: string) {
        this.place = place;
    }

    on(): void {
        console.log(this.place + " 오디오가 켜졌습니다.");
    }

    off(): void {
        console.log(this.place + " 오디오가 꺼졌습니다.");
    }

    setCd(): void {
        console.log(this.place + " 오디오에서 CD가 재생됩니다.");
    }

    setVolume(volume: number): void {
        console.log(this.place + " 오디오 볼륨이 " + volume + "로 설정되었습니다.")
    }
}