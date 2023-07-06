package ch07.Facade_Pattern;

public class Projector {
    void on() {
        System.out.println("프로젝터가 켜졌습니다.");
    }

    void wideScreenMode() {
        System.out.println("프로젝터 화면 비율을 와이드 모드로 설정합니다(16:9 비율).");
    }

    void off() {
        System.out.println("프로젝터가 꺼졌습니다.");
    }
}
