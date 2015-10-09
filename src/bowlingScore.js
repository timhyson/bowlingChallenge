function BowlingScore() {
  this.rawScores = [];
  this.bonusScores = [];

  // this.firstFrameScore = [];
  // this.frameScores = {f1:[], f2:[], f3:[], f4:[], f5:[], f6:[], f7:[], f8:[], f9:[], f10:[]};
};

BowlingScore.prototype.addNewRoundScore = function(score) {
  score === 10 ? this.rawScores.push(score, 0) : this.rawScores.push(score);

  // if (score === 10) {
  //   this.rawScores.push(score, 0);
  // } else {
  //   this.rawScores.push(score);
  // };
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

// rawScores: [6, 3, 7, 2, 4, 5]
// [[6, 3],[7, 2],[4, 5]]
