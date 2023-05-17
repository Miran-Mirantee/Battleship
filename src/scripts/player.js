class Player {
  constructor(isBot) {
    this.playerturn = false;
    this.isBot = isBot;
  }
  randNum() {
    return Math.floor(Math.random() * 10);
  }

  randCord() {
    return new Array(this.randNum(), this.randNum());
  }

  randHit(shotCord) {
    let cord = this.randCord();
    const checkContainedArr = () =>
      shotCord.some((arr) => arr.every((val, index) => val === cord[index]));
    while (checkContainedArr()) {
      cord = this.randCord();
    }
    return cord;
  }
}

export default Player;
