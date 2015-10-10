describe('BowlingScore', function() {
  var game = new BowlingScore();

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
      expect(game.rawScores).toEqual([6, 3, 7, 2, 4, 5, 10, null]);
    });

  });

  describe('frameScoresArray', function() {

    it('restructures rawScores into makeFrameScores', function() {
      game.makeFrameScores();
      expect(game.frameScores).toEqual([[6, 3], [7, 2], [4, 5], [10, null]]);
    });

  });

});

describe('bonus points', function() {

  describe('spare', function() {
    var game = new BowlingScore();

    it('adds the points from the next roll', function() {
      game.rawScores = [9, 1, 2];
      game.addNewBonusScore();
      expect(game.bonusScores).toEqual([2]);
    });

  });

  describe('strike', function() {
    var game = new BowlingScore();

    it('adds the points from the next two rolls', function() {
      game.rawScores = [10, null, 2, 5];
      game.addNewBonusScore();
      expect(game.bonusScores).toEqual([2, 5]);
    });

  });

});

//
// // a frame is made of two rolls
// describe('frame', function() {
//
//   describe('first roll', function() {
//     xit('must be less than 10', function() {
//       expect;
//     });
//   });
//
//   describe('second roll', function() {
//     xit('must be less than 10-firstThrow', function() {
//       expect;
//     });
//   });
//
// });
//
// // a strike is when all ten pins are knocked down on the first roll
// describe('strike', function() {
//
//   xit('', function() {
//     expect;
//   });
//
// });
//
// // a spare is when all ten pins are knocked down on the second roll
// describe('spare', function() {
//
//   xit('', function() {
//     expect;
//   });
//
// });
