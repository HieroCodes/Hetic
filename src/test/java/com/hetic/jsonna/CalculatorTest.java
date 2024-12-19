package com.hetic.jsonna;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class CalculatorTest {

    @Test
    public void testAdd() {
        assertEquals(2, CalculatorTest.add(1, 1), "1 + 1 should equal 2");
    }
}
