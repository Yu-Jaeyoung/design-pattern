package ch07.Facade_Pattern;

public class TheaterLights {
    void dim(int brightness) {
        System.out.println("조명 밝기를 " + brightness + "%로 설정합니다.");
    }

    void on() {
        System.out.println("조명이 켜졌습니다.");
    }
}
