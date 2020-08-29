const myMap = require("./map");

const numbers = [1, 4, 9];
const strings = ["1", "4", "9"];

function doubles(n) {
  return 2 * n;
}

const users = [{ user: "barney" }, { user: "fred" }];

test("MyMap function", () => {
  expect(myMap(numbers, Math.sqrt)).toEqual([1, 2, 3]);
  expect(myMap(numbers, doubles)).toEqual([2, 8, 18]);
  expect(myMap(users, (obj) => obj.user)).toEqual(users.map((obj) => obj.user));
});
