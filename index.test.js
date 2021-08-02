import { addString, toNumber, filterOrange } from "./index";
//task1
describe("addString", () => {
    test('aとbが"a"、"b"の時"ab"となる', () => {
    expect(addString("a", "b")).toBe("ab");
    });
    test('aが"a", bが1の時"a1"が返る', () => {
    expect(addString("a", 1)).toBe("a1");
    });
    test('aが1、bが1の時-1が返る', () => {
    expect(addString(1, 1)).toBe(-1);
    });
})

//task2
describe("toNumber", () => {
    test('strが1のとき1が返る', () => {
    expect(toNumber(1)).toBe(1);
    });
    test('strがaのときNaNが返る', () => {
    expect(toNumber("a")).toBe(NaN);
    });
    test('strがundefinedのときNaNが返る', () => {
    expect(toNumber(undefined)).toBe(NaN);
    });
})

//task3
describe("filterOrange", () => {
  test("fruitにorengeが入っていたらogangeが入った新しい配列を返す", () => {
    const fruit = ["orange", "apple", "peach"];
    expect(filterOrange(fruit)).toEqual(["orange"]);
  });
  test("fruitにogangeがなかったら空の配列を返す", () => {
    const fruit = ["banana", "apple", "peach"];
    expect(filterOrange(fruit)).toEqual([]);
  });
});
