package ch07.Facade_Pattern;

public class PopcornPopper {
    void on() {
        System.out.println("팝콘 기계가 켜졌습니다.");
    }

    void pop() {
        System.out.println("팝콘 기계에서 팝콘을 튀기고 있습니다.");
    }

    void off() {
        System.out.println("팝콘 기계가 꺼졌습니다.");
    }
}
