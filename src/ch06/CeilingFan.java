package ch06;

public class CeilingFan {

    public static final int HIGH = 3;
    public static final int MEDIUM = 2;
    public static final int LOW = 1;
    public static final int OFF = 0;
    String place;
    int speed;

    public CeilingFan(String place) {
        this.place = place;
        speed = OFF;
    }

    public void high() {
        speed = HIGH;
        System.out.println(place + "의 선풍기 속도가 HIGH로 설정되었습니다.");
    }

    public void medium() {
        speed = MEDIUM;
        System.out.println(place + "의 선풍기 속도가 MEDIUM으로 설정되었습니다.");
    }

    public void low() {
        speed = LOW;
        System.out.println(place + "의 선풍기 속도가 LOW로 설정되었습니다.");
    }

    public void off() {
        speed = OFF;
        System.out.println(place + "의 선풍기의 전원을 끕니다.");
    }

    public int getSpeed() {
        return speed;
    }
}
