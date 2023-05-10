class Player {
  constructor(isBot) {
    this.playerturn = false;
    this.isBot = isBot;
  }
  randNum() {
    return Math.floor(Math.random() * 10) + 1;
  }

  randCord() {
    return new Array(this.randNum(), this.randNum());
  }

  randHit(missedCord) {
    let cord = this.randCord();
    while (missedCord.includes(cord)) {
      cord = this.randCord();
    }
    return cord;
  }
}

export default Player;
