package ch11;

public class SoldState implements State {
    private static final long serialVersionUID = 2L;
    transient GumballMachine gumballMachine;

    public SoldState(GumballMachine gumballMachine) {
        this.gumballMachine = gumballMachine;
    }

    public void insertQuarter() {
        System.out.println("알맹이를 내보내고 있습니다.");
    }

    public void ejectQuarter() {
        System.out.println("이미 알맹이를 뽑으셨습니다.");
    }

    public void turnCrank() {
        System.out.println("손잡이는 한번만 돌려주세요.");
    }

    public void dispense() {
        gumballMachine.releaseBall();
        try {
            if (gumballMachine.getCount() > 0) {
                gumballMachine.setState(gumballMachine.getNoQuarterState());
            } else {
                System.out.println("매진되었습니다.");
                gumballMachine.setState(gumballMachine.getSoldOutState());
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public String toString() {
        return "알맹이를 내보내는 중...";
    }
}
