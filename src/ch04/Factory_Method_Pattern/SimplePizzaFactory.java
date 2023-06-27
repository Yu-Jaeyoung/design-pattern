package ch04.Factory_Method_Pattern;

public abstract class SimplePizzaFactory extends Pizza {
    public Pizza createPizza(String type) {
        Pizza pizza = null;

        switch (type) {
            case "cheese" -> pizza = new CheesePizza();
            case "pepperoni" -> pizza = new PepperoniPizza();
            case "clam" -> pizza = new ClamPizza();
            case "veggie" -> pizza = new VeggiePizza();
        }
        return pizza;
    }
}
