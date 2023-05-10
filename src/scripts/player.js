class Player {
  constructor(isBot) {
    this.playerturn = false;
    this.isBot = isBot;
  }
  randNum() {
    return Math.floor(Math.random() * 10);
  }

  randCord() {
    // const result = new Array(this.randNum(), this.randNum());
    // console.log(result);
    // return result;
    return new Array(this.randNum(), this.randNum());
  }

  randHit(missedCord) {
    let cord = this.randCord();
    const checkContainedArr = () =>
      missedCord.some((arr) => arr.every((val, index) => val === cord[index]));
    while (checkContainedArr()) {
      cord = this.randCord();
    }
    return cord;
  }
}

export default Player;
