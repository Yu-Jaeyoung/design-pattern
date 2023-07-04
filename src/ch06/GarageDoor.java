package ch06;

public class GarageDoor {
    String place;

    public GarageDoor(String place) {
        this.place = place;
    }

    void up() {
        System.out.println(place + " 차고 문이 열렸습니다.");
    }

    void down() {
        System.out.println(place + " 차고 문이 닫혔습니다.");
    }

    void stop() {

    }

    void lightOn() {

    }

    void lightOff() {

    }
}
