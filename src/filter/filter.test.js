require("./filter");

const numbers = [1, 4, 9, 4, 5, 8, 4, 4];
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

const equal = (item) => item > 6;
const result = (word) => word.length > 6;

test("MyMap function", () => {
  expect(numbers.myFilter(equal)).toEqual(numbers.filter(equal));
  expect(words.myFilter(result)).toEqual(words.filter(result));
});
