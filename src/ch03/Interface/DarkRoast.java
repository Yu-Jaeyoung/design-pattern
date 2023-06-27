package ch03.Interface;

public class DarkRoast implements Beverage {

    @Override
    public String getDescription() {
        return "다크 로스트";
    }

    @Override
    public double cost() {
        return .99;
    }
}
