//Dependencies
const React = require('react');
const Reflux = require('reflux');
const GifsStore = require('../../../reflux/Gifs/GifsStore.jsx');
const GifsActions = require('../../../reflux/Gifs/GifsStore.jsx');

//Sub-components
const Gif = require('./Gif.jsx');

//Component
let GifList = React.createClass({
  mixins : [
    Reflux.listenTo(GifsStore, "onGifsChange")
  ],
  getInitialState : function(){
    return {gifs : []}
  },
  onGifsChange : function(event, data){
    if(event == "showGifs"+this.props.listID){
      this.setState({gifs : data}, function(err){
        console.log("Gifs showed");
      });
    }
  },
  render : function(){
    let generateGif = function(gif, index){
      return (
        <Gif
          src={gif.images["fixed_height_small"].url}
          download={gif.images.original.url}
          key={gif.images.original.url+index+Math.floor(Math.random()*1000)}>
        </Gif>);
    }

    return (
      <div className=".gifList col-12 col-m-6 col-l-3">
        {this.props.gifs.map(generateGif)}
      </div>
    );
  }
})

module.exports = GifList;
