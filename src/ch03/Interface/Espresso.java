package ch03.Interface;

public class Espresso implements Beverage {

    @Override
    public String getDescription() {
        return "에스프레소";
    }

    @Override
    public double cost() {
        return 1.99;
    }
}
