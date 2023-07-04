package ch06;

public class Light {

    String place;

    public Light(String place) {
        this.place = place;
    }

    public void on() {
        System.out.println(place + " 조명이 켜졌습니다.");
    }

    public void off() {
        System.out.println(place + " 조명이 꺼졌습니다.");
    }
}
