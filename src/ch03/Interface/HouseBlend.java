package ch03.Interface;

public class HouseBlend implements Beverage {

    @Override
    public String getDescription() {
        return "하우스 블랜드 커피";
    }

    @Override
    public double cost() {
        return .89;
    }
}
