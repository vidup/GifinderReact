var Reflux = require('reflux');

var Actions = Reflux.createActions([
  'setSearchInput',
  'showGifs',
  'hideOverlays'
]);

module.exports = Actions;
