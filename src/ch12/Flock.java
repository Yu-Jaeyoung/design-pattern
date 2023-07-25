package ch12;

import java.util.ArrayList;
import java.util.List;

public class Flock implements Quackable {
    List<Quackable> ducks = new ArrayList<Quackable>();

    public void add(Quackable duck) {
        ducks.add(duck);
    }

    @Override
    public void quack() {
        for (Quackable duck : ducks) {
            duck.quack();
        }
    }

    @Override
    public void registerObserver(Observer observer) {
        for (Quackable duck : ducks) {
            duck.registerObserver(observer);
        }
    }

    @Override
    public void notifyObservers() {

    }

    @Override
    public String toString() {
        return "오리 무리";
    }
}
