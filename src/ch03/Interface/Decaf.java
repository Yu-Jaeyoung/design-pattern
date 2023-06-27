package ch03.Interface;

public class Decaf implements Beverage {

    @Override
    public String getDescription() {
        return "디카페인";
    }

    @Override
    public double cost() {
        return 1.05;
    }
}
