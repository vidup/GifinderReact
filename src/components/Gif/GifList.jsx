//Dependencies
const React = require('react');
const Reflux = require('reflux');
const GifsStore = require('../../reflux/Gifs/GifsStore.jsx');

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
    if(event == "Gifs"){
      console.log(data);
      this.setState({gifs : data}, function(err){
        console.log("Gifs list updated !");
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

    let listStyle = {
      width : "100%",
      height : "auto",
      margin : "auto"
    }

    return (
      <div style = {listStyle}>
        {this.state.gifs.map(generateGif)}
      </div>
    );
  }
})

module.exports = GifList;
