function BowlingScore() {
  this.rawScores = [];
  this.frameScores = [];
  this.bonusScores = [];
};

BowlingScore.prototype.addNewRoundScore = function(score) {
  score === 10 ? this.rawScores.push(score, 0) : this.rawScores.push(score);
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
  for (i = 0; i < this.rawScores.length; i += 1) {
    if (this.rawScores[i] + this.rawScores[i + 1] === 10) {
      this.bonusScores.push(this.rawScores[i + 2])
    };
  };

  // if (this.rawScores[i] + this.rawScores[i+1] === 10) {
  //   this.bonusScores.push(this.rawScores[i+2]);
  //
  //
  //
  // for (i = 0; i < this.frameScores.length; i += 1 ) {
  //   if (this.frameScores[i][0] + this.frameScores[i+1][1]) {
  //
  //   }
  // };

};


  // this.frameScores = [[0, 0]];
  // var bonusScores = [];
  //
  // for (i = 0; i < this.frameScores.length; i += 1) {
  //   if (this.frameScores[i].reduce === 10) {
  //     bonusScores.push(this.frameScores[i + 1][0]);
  //   } else {
  //     console.log(this.frameScores);
  //     console.log(bonusScores)
  //   }
  // };
