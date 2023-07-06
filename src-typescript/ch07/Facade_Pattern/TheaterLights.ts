export class TheaterLights {
    dim(brightness: number): void {
        console.log("조명 밝기를 " + brightness + "%로 설정합니다.");
    }

    on(): void {
        console.log("조명이 켜졌습니다.");
    }
}