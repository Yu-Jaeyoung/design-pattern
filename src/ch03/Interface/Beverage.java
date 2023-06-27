package ch03.Interface;

public interface Beverage {

    // 인터페이스에 선언된 추상 메소드는 모두 public abstract 특성을 가짐
    String getDescription();

    double cost();
}
