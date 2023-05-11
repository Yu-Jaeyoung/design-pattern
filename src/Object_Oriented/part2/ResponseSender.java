/**
 * 개방 폐쇄 원칙 (Open-closed principle) 예
package Object_Oriented.part2;

public class ResponseSender {
    private Data data;

    public ResponseSender(Data data) {
        this.data = data;
    }

    public Data getData() {
        return data;
    }

    public void send() {
        sendHeader();
        sendBody();
    }

    protected void sendHeader() {
        // 헤더 데이터 전송
    }

    protected void sendBody() {
        // 텍스트로 데이터 전송
    }
}

public class ZippedResponseSender extends ResponseSender {

    public ZippedResponseSender(Data data) {
        super(data);
    }

    @Override
    protected void sendBody() {
        // 데이터 압축 처리
    }
}
*/
