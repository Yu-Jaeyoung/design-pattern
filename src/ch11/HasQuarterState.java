package ch11;

import java.util.Random;

public class HasQuarterState implements State {
    private static final long serialVersionUID = 2L;
    Random randomWinner = new Random(System.currentTimeMillis());
    transient GumballMachine gumballMachine;

    public HasQuarterState(GumballMachine gumballMachine) {
        this.gumballMachine = gumballMachine;
    }

    public void insertQuarter() {
        System.out.println("동전은 한개만 넣어주세요.");
    }

    public void ejectQuarter() {
        System.out.println("동전이 반환됩니다.");
        // 동전을 돌려주며 상태 전환
        gumballMachine.setState(gumballMachine.getNoQuarterState());
    }

    public void turnCrank() {
        System.out.println("손잡이를 돌리셨습니다.");
        int winner = randomWinner.nextInt(10);
        if (winner == 0) {
            gumballMachine.setState(gumballMachine.getWinnerState());
        } else {
            gumballMachine.setState(gumballMachine.getSoldState());
        }
    }

    public void dispense() {
        System.out.println("알맹이를 내보낼 수 없습니다.");
    }

    public String toString() {
        return "손잡이를 돌리길 기다리는 중...";
    }
}
