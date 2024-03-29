import { describe, expect, test } from "@jest/globals";
import { MinStack } from "../155_Min_Stack";

describe("MinStack should work properly", () => {
  test("checks the base case", () => {
    const minStack = new MinStack();
    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);
    expect(minStack.getMin()).toEqual(-3);
    minStack.pop();
    expect(minStack.top()).toEqual(0);
    expect(minStack.getMin()).toEqual(-2);
  });
});
