export class Amplifier {
    on(): void {
        console.log("엠프가 켜졌습니다.");
    }

    setStreamingPlayer(): void {
        console.log("엠프를 스트리밍 플레이어와 연결");
    }

    setSurroundSound(): void {
        console.log("엠프를 서라운드 모드로 설정(5.1 채널).")
    }

    setVolume(volume: number): void {
        console.log("엠프 볼륨을 " + volume + "로 설정합니다.");
    }

    off(): void {
        console.log("엠프가 꺼졌습니다.");
    }
}