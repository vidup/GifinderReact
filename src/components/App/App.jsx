//Dependencies
const React = require('react');
const Reflux = require('reflux');
const GifsStore = require('../../reflux/Gifs/GifsStore.jsx');

//Sub-components
let GifList = require('./Gif/GifList.jsx');
let SearchForm = require('./Forms/SearchForm.jsx');

//Component
let App = React.createClass({
  mixins : [
    Reflux.listenTo(GifsStore, "onGifsChange")
  ],
  getInitialState : function(){
    return ({gifs : []});
  },
  onGifsChange : function(event, data){
    if(event == "showGifs"){
      this.setState({gifs : data}, function(){

      });
    }
  },
  render : function(){
    return (
      <div>
        <SearchForm/>
        <GifList listID="1" gifs={this.state.gifs.slice(0,4)}></GifList>
        <GifList listID="2" gifs={this.state.gifs.slice(5,9)}></GifList>
        <GifList listID="3" gifs={this.state.gifs.slice(10,14)}></GifList>
        <GifList listID="4" gifs={this.state.gifs.slice(15,19)}></GifList>
      </div>
    );
  }
});

module.exports = App;
