package ch09.Iterator_Pattern;

import java.util.Iterator;

public interface Menu {
    public Iterator<MenuItem> createIterator();
}
