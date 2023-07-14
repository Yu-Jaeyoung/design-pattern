package ch10;

public class SoldState implements State {
    GumballMachine gumballMachine;

    public SoldState(GumballMachine gumballMachine) {
        this.gumballMachine = gumballMachine;
    }

    // 현 상태에서는 부적절
    @Override
    public void insertQuarter() {
        System.out.println("알맹이를 내보내고 있습니다.");
    }

    // 현 상태에서는 부적절
    @Override
    public void ejectQuarter() {
        System.out.println("이미 얼맹이를 뽑으셨습니다.");
    }

    // 현 상태에서는 부적절
    @Override
    public void turnCrank() {
        System.out.println("손잡이는 한번만 돌려주세요.");
    }

    @Override
    public void dispense() {
        gumballMachine.releaseBall();
        if (gumballMachine.getCount() > 0) {
            gumballMachine.setState(gumballMachine.getNoQuarterState());
        } else {
            System.out.println("매진되었습니다.");
            gumballMachine.setState(gumballMachine.getSoldOutState());
        }
    }
}
