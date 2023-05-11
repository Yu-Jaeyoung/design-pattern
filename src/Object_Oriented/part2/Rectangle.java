/**
 * 리스코프 치환 원칙 (Liskov substitution principle)을 지키지 않았을 때의 예시
 * 1. 직사각형-정사각형 문제
package Object_Oriented.part2;

public class Rectangle {
    private int width;
    private int height;

    public void setWidth(int width) {
        this.width = width;
    }

    public void setHeight(int height) {
        this.height = height;
    }

    public int getWidth() {
        return width;
    }

    public int getHeight() {
        return height;
    }


//    public void increaseHeight(Rectangle rec) {
//        if (rec.getHeight() <= rec.getWidth()) {
//            rec.setHeight(rec.getWidth() + 10);
//        }
//    }

    public void increaseHeight(Rectangle rec) {
        if (rec instanceof Square)
            throw new CantSupportSquareException();
        if (rec.getHeight() <= rec.getWidth()) {
            rec.setHeight(rec.getWidth() + 10);
        }
    }
}

public class Square extends Rectangle {
    @Override
    public void setWidth(int width) {
        super.setWidth(width);
        super.setHeight(width);
    }

    @Override
    public void setHeight(int height) {
        super.setWidth(height);
        super.setHeight(height);
    }
}
*/
