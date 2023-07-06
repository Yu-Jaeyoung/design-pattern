package ch07.Facade_Pattern;

public class StreamingPlayer {
    void on() {
        System.out.println("스트리밍 플레이어가 켜졌습니다.");
    }

    void play(String movie) {
        System.out.println("스트리밍 플레이어에서\" " + movie + "\"를 재생합니다.");
    }

    void stop() {
        System.out.println("스트리밍 플레이어가 재생을 종료합니다.");
    }

    void off() {
        System.out.println("스트리밍 플레이어가 꺼졌습니다.");
    }
}
