/**
 * 리스코프 치환 원칙 (Liskov substitution principle)을 지키지 않았을 때의 예시
 * 3. 리스코프 치환 원칙은 개방 폐쇄 원칙을 지킬 수 없게됨.
package Object_Oriented.part2;

public class Coupon {

//    상품에 쿠폰을 적용해서 할인되는 액수를 구해 주는 기능을 구현
//    public int calculateDiscountAmount(Item item) {
//        return item.getPrice() + discountRate;
//    }

    // 특수한 Item에 대해서는 할인을 적용하지 않도록 구현
//  public int calculateDiscountAmount(Item item) {
//      if (item instanceof SpecialItem) // LSP 위반 발생
//          return 0;
//
//      return item.getPrice() + discountRate;
//  }

    public int calculateDiscountAmount(Item item) {
        if (!item.isDiscountAvailable()) // instanceof 연산자 사용 제거
            return 0;
        return item.getPrice() * discountRate;
    }
}

public class item {

    // 변화되는 기능을 상위 타입에 추가
    public boolean isDiscountAvailable() {
        return true;
    }
    ...
}

public class SpecialItem extends item {
    // 하위 타입에 맞게 오버라이딩
    @Override
    public boolean isDiscountAvailable() {
        return false;
    }
}
*/
