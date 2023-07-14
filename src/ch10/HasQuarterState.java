package ch10;

import java.util.Random;

public class HasQuarterState implements State {
    Random randomWinner = new Random(System.currentTimeMillis());
    GumballMachine gumballMachine;

    public HasQuarterState(GumballMachine gumballMachine) {
        this.gumballMachine = gumballMachine;
    }

    @Override
    public void insertQuarter() {
        System.out.println("동전은 한개만 넣어주세요.");
    }

    @Override
    public void ejectQuarter() {
        System.out.println("동전이 반환됩니다.");
        // 동전을 돌려주고 NoQuarterState로 전환
        gumballMachine.setState(gumballMachine.getNoQuarterState());
    }

    @Override
    public void turnCrank() {
        System.out.println("손잡이를 돌리렸습니다.");
        int winner = randomWinner.nextInt(10);
        if ((winner == 0) && (gumballMachine.getCount() > 1)) {
            gumballMachine.setState(gumballMachine.getWinnerState());
        } else {
            gumballMachine.setState(gumballMachine.getSoldState());
        }
    }

    @Override
    public void dispense() {
        // 현 상태에서 부적절한 메소드
        System.out.println("알맹이를 내보낼 수 없습니다.");
    }
}
