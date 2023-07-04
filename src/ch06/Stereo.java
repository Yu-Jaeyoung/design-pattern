package ch06;

public class Stereo {
    String place;

    public Stereo(String place) {
        this.place = place;
    }

    void on() {
        System.out.println(place + " 오디오가 켜졌습니다.");
    }

    void off() {
        System.out.println(place + " 오디오가 꺼졌습니다.");
    }

    void setCd() {
        System.out.println(place + " 오디오에서 CD가 재생됩니다.");
    }

    void setDvd() {

    }

    void setRadio() {

    }

    void setVolume(int volume) {
        System.out.println(place + " 오디오의 볼륨이 " + volume + "로 설정되었습니다.");
    }
}
