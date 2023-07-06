export class StreamingPlayer {
    on(): void {
        console.log("스트리밍 플레이어가 켜졌습니다.");
    }

    play(movie: string): void {
        console.log("스트리밍 플레이어에서 \" " + movie + "\"를 재생합니다.");
    }

    stop(): void {
        console.log("스트리밍 플레이어가 재생을 종료합니다.");
    }

    off(): void {
        console.log("스트리밍 플레이어가 꺼졌습니다.");
    }
}