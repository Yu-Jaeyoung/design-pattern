package ch04.Factory_Method_Pattern;

public class NYPizzaStore extends PizzaStore {

    Pizza createPizza(String item) {
        switch (item) {
            case "cheese" -> {
                return new NYStyleCheesePizza();
            }
            case "pepperoni" -> {
                return new NYStylePepperoniPizza();
            }
            case "clam" -> {
                return new NYStyleClamPizza();
            }
            case "veggie" -> {
                return new NYStyleVeggiePizza();
            }
            default -> {
                return null;
            }
        }
    }
}
