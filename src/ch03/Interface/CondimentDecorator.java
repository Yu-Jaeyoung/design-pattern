package ch03.Interface;

public class CondimentDecorator implements Beverage {
    Beverage beverage;

    @Override
    public String getDescription() {
        return "";
    }

    @Override
    public double cost() {
        return 0;
    }
}
