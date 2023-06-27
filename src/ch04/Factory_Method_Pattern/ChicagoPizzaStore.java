package ch04.Factory_Method_Pattern;

public class ChicagoPizzaStore extends PizzaStore {

    Pizza createPizza(String item) {
        switch (item) {
            case "cheese" -> {
                return new ChicagoStyleCheesePizza();
            }
            case "pepperoni" -> {
                return new ChicagoStylePepperoniPizza();
            }
            case "clam" -> {
                return new ChicagoStyleClamPizza();
            }
            case "veggie" -> {
                return new ChicagoStyleVeggiePizza();
            }
            default -> {
                return null;
            }
        }
    }
}
