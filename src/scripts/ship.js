const ship = (length) => {
  this.hitCount = 0;
  const isSunk = () => {
    if (this.hitCount === length) return true;
    return false;
  };
  const hit = () => {
    this.hitCount++;
  };

  return { length, hitCount, isSunk, hit };
};

export default ship;
