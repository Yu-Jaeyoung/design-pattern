package ch11;

public class WinnerState implements State {
    private static final long serialVersionUID = 2L;
    transient GumballMachine gumballMachine;

    public WinnerState(GumballMachine gumballMachine) {
        this.gumballMachine = gumballMachine;
    }

    public void insertQuarter() {
        System.out.println("대기 중...");
    }

    public void ejectQuarter() {
        System.out.println("대기 중...");
    }

    public void turnCrank() {
        System.out.println("손잡이는 한번만 돌려주세요.");
    }

    public void dispense() {
        System.out.println("축하합니다. 알맹이를 하나 더 받으실 수 있습니다.");
        gumballMachine.releaseBall();
        if (gumballMachine.getCount() == 0) {
            gumballMachine.setState(gumballMachine.getSoldOutState());
        } else {
            gumballMachine.releaseBall();
            if (gumballMachine.getCount() > 0) {
                gumballMachine.setState(gumballMachine.getNoQuarterState());
            } else {
                System.out.println("매진입니다.");
                gumballMachine.setState(gumballMachine.getSoldOutState());
            }
        }
    }

    public String toString() {
        return "알맹이를 추가로 내보내는중...";
    }
}
