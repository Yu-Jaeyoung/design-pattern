package ch11;

public class SoldOutState implements State {
    private static final long serialVersionUID = 2L;
    transient GumballMachine gumballMachine;

    public SoldOutState(GumballMachine gumballMachine) {
        this.gumballMachine = gumballMachine;
    }

    public void insertQuarter() {
        System.out.println("매진되었습니다.");
    }

    public void ejectQuarter() {
        System.out.println("매진되었습니다.");
    }

    public void turnCrank() {
        System.out.println("매진되었습니다.");
    }

    public void dispense() {
        System.out.println("매진되었습니다.");
    }

    public String toString() {
        return "매진";
    }
}
