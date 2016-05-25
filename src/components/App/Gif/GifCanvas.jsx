//Dependencies
const React = require('react');
const Reflux = require('reflux');
const GifActions = require('../../../reflux/Gifs/GifsActions.jsx');
const GifsStore = require('../../../reflux/Gifs/GifsStore.jsx');
const Colors = require('../../../tools/colors');

//Sub-components
const GifOverlay = require('./GifOverlay.jsx');

//Component
const Gif = React.createClass({
  mixins : [
    Reflux.listenTo(GifsStore, "onGifsChange")
  ],
  getInitialState : function(){
    return {
      url : "",
      hovered : false,
      activeID : Math.random()*100,
      imageLoaded : false,
      backgroundColor : Colors.randomBeautifulGrey(),
      loadingFailed : false
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
  handleImageLoaded : function(){
    this.setState({ backgroundColor: "transparent" });
  },
  handleImageFailed : function(){
    this.setState({ loadingFailed : true})
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

    let generateImage = function(){
      if(component.state.loadingFailed){
        return (<h1>Error : image couldn't load. Sorry :'(</h1>)
      }else{
        return (
          <img
            onMouseEnter={component.onMouseEnter}
            onMouseLeave={component.onMouseLeave}
            onLoad={component.handleImageLoaded}
            onError={component.handleImageFailed}
            src={component.props.src}
            className="gif"
            style={backgroundStyle}
          />
        )
      }
    }

    let backgroundStyle = {
      backgroundColor : this.state.backgroundColor
    }
    return (
      <div style={{position : "relative", display : "block", float : "left", width : "100%"}}>
        {generateImage()}
        <GifOverlay
          visibility={overlayStatus()}
          download ={this.props.download}
          origin={this.props.origin}
          giphy={this.props.giphy}
        />
      </div>
    );
  }
});

module.exports = Gif;
