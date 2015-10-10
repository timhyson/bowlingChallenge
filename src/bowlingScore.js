function BowlingScore() {
  this.rawScores = [];
  this.frameScores = [];
  this.bonusScores = [];
};

BowlingScore.prototype.addNewRollScore = function(score) {
  score === 10 ? this.rawScores.push(score, null) : this.rawScores.push(score);
};

BowlingScore.prototype.makeFrameScores = function() {
  this.frameScores = [[this.rawScores[0]]];

  for (i = 1; i < this.rawScores.length; i += 1) {
    if (this.frameScores[this.frameScores.length - 1].length < 2) {
      this.frameScores[this.frameScores.length - 1].push(this.rawScores[i]);
    } else {
      var currentFrame = [];
      currentFrame.push(this.rawScores[i]);
      this.frameScores.push(currentFrame);
    };
  };
};

BowlingScore.prototype.addNewBonusScore = function() {
  for (i = 0; i < this.rawScores.length; i += 2) {
    if (this.rawScores[i] === 10) {
      console.log('strike');
      this.bonusScores.push(this.rawScores[i + 2] + (this.rawScores[i + 3]));
    } else if (this.rawScores[i] + this.rawScores[i + 1] === 10) {
      console.log('spare');
      this.bonusScores.push(this.rawScores[i + 2]);
    } else {
      console.log('no bonus');
      this.bonusScores.push(0)
    };
  };
};
