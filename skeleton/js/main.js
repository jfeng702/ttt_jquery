const View = require('./ttt-view');
const Game = require('../../node_solution/game');

$( () => {
  // Your code here
  const ttt = $('.ttt');
  const game = new Game();
  new View(game, ttt);
});
