Array.prototype.myMap = function (callback) {
  let newArr = [];
  for (const item of this) {
    newArr.push(callback(item));
  }
  return newArr;
};
