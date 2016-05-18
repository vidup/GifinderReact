//Dependencies
const React = require('react');
const Reflux = require('reflux');
const GifsStore = require('../../../reflux/Gifs/GifsStore.jsx');
const GifsActions = require('../../../reflux/Gifs/GifsStore.jsx');

//Sub-components
const GifCanvas = require('./GifCanvas.jsx');
const FlipMove = require('react-flip-move');

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

          <GifCanvas
            src={gif.images["fixed_height_small"].url}
            download={gif.images.original.url}
            giphy={gif.bitly_url}
            origin={gif.source_post_url}
            key={gif.images.original.url+index+Math.floor(Math.random()*1000)}>
          </GifCanvas>
      );
    }

    return (
      <div className="gifList col-12 col-m-6 col-l-3">
      <FlipMove
        enterAnimation="accordianVertical" leaveAnimation="accordianVertical">
          {this.props.gifs.map(generateGif)}
          </FlipMove>
      </div>
    );
  }
})

module.exports = GifList;
