var Reflux = require('reflux');

var Actions = Reflux.createActions([
  'getGifs',
  'showGifs',
  'hideOverlays'
]);

module.exports = Actions;
