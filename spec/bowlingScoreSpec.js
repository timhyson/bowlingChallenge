var game = new BowlingScore();

describe('BowlingScore', function() {


  describe('addNewRoundScore', function() {

    it('correctly pushes first frame into raw score array', function() {
      game.addNewRoundScore(6);
      game.addNewRoundScore(3);
      expect(game.rawScores).toEqual([6, 3]);
    });

    it('correctly pushes second frame into raw score array', function() {
      game.addNewRoundScore(7);
      game.addNewRoundScore(2);
      game.addNewRoundScore(4);
      game.addNewRoundScore(5);
      expect(game.rawScores).toEqual([6, 3, 7, 2, 4, 5]);
    });

    it('correctly pushes strike into raw score array', function() {
      game.addNewRoundScore(10);
      expect(game.rawScores).toEqual([6, 3, 7, 2, 4, 5, 10, 0]);
    });

  });

  describe('frameScoresArray', function() {
    it('restructures rawScores into makeFrameScores', function() {
      game.makeFrameScores();
      expect(game.frameScores).toEqual([[6, 3],[7, 2],[4, 5],[10, 0]]);
    });

  });

});

describe('bonus points', function() {

  describe('spare', function() {
    it('adds the points from the next roll', function() {
      game.addNewRoundScore(9);
      game.addNewRoundScore(1);
      game.addNewRoundScore(5);
      expect(game.bonusScores).toEqual(5);
    });
  })

  describe('strike', function() {
    xit('adds the points from the next two rolls', function() {

    });
  })

});

// a frame is made of two rolls
describe('frame', function() {

  describe('first roll', function() {
    xit('must be less than 10', function() {
      expect;
    });
  });

  describe('second roll', function() {
    xit('must be less than 10-firstThrow', function() {
      expect;
    });
  });

});

// a strike is when all ten pins are knocked down on the first roll
describe('strike', function() {

  xit('', function() {
    expect;
  });

});

// a spare is when all ten pins are knocked down on the second roll
describe('spare', function() {

  xit('', function() {
    expect;
  });

});
