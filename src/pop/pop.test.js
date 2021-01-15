require("./pop");

const numbers = [1, 4, 9];
const emptyArray = [];
const users = [{ user: "barney" }, { user: "fred" }];

test("myPop function", () => {
  expect(numbers.myPop()).toEqual(9);
  expect(users.myPop()).toEqual({ user: "fred" });
  expect(users).toEqual([{ user: "barney" }]);
  expect(emptyArray.myPop()).toEqual(undefined);
});
