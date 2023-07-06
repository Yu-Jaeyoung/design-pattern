export class Projector {
    on(): void {
        console.log("프로젝터가 켜졌습니다.")
    }

    wideScreenMode(): void {
        console.log("프로젝터 화면 비율을 와이드 모드로 설정합니다. (16:9 비율)");
    }

    off(): void {
        console.log("프로젝터가 꺼졌습니다.");
    }
}