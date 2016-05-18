//Dependencies
const React = require('react');
const Reflux = require('reflux');
const GifActions = require('../../../reflux/Gifs/GifsActions.jsx');
const GifsStore = require('../../../reflux/Gifs/GifsStore.jsx');
const Colors = require('../../../tools/colors');

//Sub-components
let GifOverlay = require('./GifOverlay.jsx');

//Component
let Gif = React.createClass({
  mixins : [
    Reflux.listenTo(GifsStore, "onGifsChange")
  ],
  getInitialState : function(){
    return {
      url : "",
      hovered : false,
      activeID : Math.random()*100,
      imageLoaded : false,
      backgroundColor : Colors.randomBeautifulGrey()
    }
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
  handleImageLoaded() {
    this.setState({ backgroundColor: "transparent" });
  },
  render : function(){

    let component = this;

    let overlayStatus = function(){
      if(component.state.hovered){
        return "visible";
      }else{
        return "hidden"
      }
    }
    let backgroundStyle = {
      backgroundColor : this.state.backgroundColor
    }
    return (
      <div style={{position : "relative", display : "block", float : "left", width : "100%"}}>
          <img
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
            onLoad={this.handleImageLoaded}
            src={this.props.src}
            className="gif"
            style={backgroundStyle}
          />
        <GifOverlay
          visibility={overlayStatus()}
          download ={this.props.download}
        />
      </div>
    );
  }
});

module.exports = Gif;
