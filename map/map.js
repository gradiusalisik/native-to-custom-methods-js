const myMap = (arr, callback) => {
  let newArr = [];
  for (const item of arr) {
    newArr.push(callback(item));
  }
  return newArr;
};

module.exports = myMap;
