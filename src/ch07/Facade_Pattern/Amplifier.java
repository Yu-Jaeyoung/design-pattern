package ch07.Facade_Pattern;

public class Amplifier {
    void on() {
        System.out.println("엠프가 켜졌습니다.");
    }

    void setStreamingPlayer(StreamingPlayer streamingPlayer) {
        System.out.println("엠프를 스트리밍 플레이어와 연결합니다.");
    }

    void setSurroundSound() {
        System.out.println("엠프를 서라운드 모드로 설정합니다(5.1 채널).");
    }

    void setVolume(int volume) {
        System.out.println("엠프 볼륨을 " + volume + "로 설정합니다.");
    }

    void off() {
        System.out.println("엠프가 꺼졌습니다.");
    }
}
