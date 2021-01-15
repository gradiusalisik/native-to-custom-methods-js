Array.prototype.myPop = function () {
  if (this.length === 0) {
    return undefined;
  }

  let newArr = [...this];
  const last = this[this.length - 1];

  this.length = 0;

  for (let i = 0; i <= newArr.length - 2; i++) {
    this[i] = newArr[i];
  }

  return last;
};
