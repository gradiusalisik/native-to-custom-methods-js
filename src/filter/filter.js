Array.prototype.myFilter = function (callback) {
  let newArray = [];

  for (const item of this) {
    if (callback(item)) {
      newArray.push(item);
    }
  }

  return newArray;
};
