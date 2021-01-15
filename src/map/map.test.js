require("./map");

const numbers = [1, 4, 9];

function doubles(n) {
  return 2 * n;
}

const users = [{ user: "barney" }, { user: "fred" }];

test("MyMap function", () => {
  expect(numbers.myMap(Math.sqrt)).toEqual([1, 2, 3]);
  expect(numbers.myMap(doubles)).toEqual([2, 8, 18]);
  expect(users.myMap((obj) => obj.user)).toEqual(users.map((obj) => obj.user));
});
