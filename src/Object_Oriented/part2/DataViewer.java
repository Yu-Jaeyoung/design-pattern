/**
 * 단일 책임 원칙 (Single responsibility principle)이 지켜지지 않은 DataViewer 클래스
package Object_Oriented.part2;

public class DataViewer {

    public void display() {
        String data = loadHtml();
        updateGui(data);
    }

    public String loadHtml() {
        HttpClient client = new HttpClient();
        client.connect(url);
        return client.getResponse();
    }

    private void updateGui(String data) {
        GuiData guiModel = parseDataToGuiData(data);
        tableUi.changeData(guiModel);
    }

    private GuiData parseDataToGuiData(String data) {
        ... // 파싱 처리 코드
    }

    ... // 기타 필드 등 다른 코드
}
*/
