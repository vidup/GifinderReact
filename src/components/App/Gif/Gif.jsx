//Dependencies
const React = require('react');
const Reflux = require('reflux');
const GifActions = require('../../../reflux/Gifs/GifsActions.jsx');
const GifsStore = require('../../../reflux/Gifs/GifsStore.jsx');

//Sub-components
let GifOverlay = require('./GifOverlay.jsx');

//Component
let Gif = React.createClass({
  mixins : [
    Reflux.listenTo(GifsStore, "onGifsChange")
  ],
  getInitialState : function(){
    return { url : "", hovered : false, activeID : Math.random()*100}
  },
  onGifsChange : function(event, activeID){
    if(event == "hideOverlays" && activeID!=this.state.activeID){
      this.setState({hovered : false});
    }
  },
  onMouseEnter : function(){
    GifActions.hideOverlays(this.state.activeID);
    this.setState({hovered : true}) // Set the state to hovered
  },
  render : function(){
    let GifStyle = {
      width : "100%",
      display : "block",
      margin : 0,
      padding: 5,
      float : "left",
      height : "auto" || this.props.height,
      zIndex : 0
    }

    let store = this;

    let overlayStatus = function(){
      if(store.state.hovered){
        return "visible";
      }else{
        return "hidden"
      }
    }

    return (
      <div style={{position : "relative", display : "block", float : "left", width : "100%"}}>
        <img
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
          src={this.props.src}
          style={GifStyle}>
        </img>
        <GifOverlay
          visibility={overlayStatus()}
          download ={this.props.download}
        />
      </div>
    );
  }
});

module.exports = Gif;
