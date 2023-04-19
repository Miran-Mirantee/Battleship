const ship = function (length) {
  this.hitCount = 0;
  this.length = length;
  this.isSunk = () => {
    if (this.hitCount >= length) return true;
    return false;
  };
  this.hit = () => {
    this.hitCount++;
  };
};

export default ship;
