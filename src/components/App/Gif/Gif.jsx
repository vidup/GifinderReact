//Dependencies
const React = require('react');

//Sub-components
let GifOverlay = require('./GifOverlay.jsx');

//Component
let Gif = React.createClass({
  getInitialState : function(){
    return { url : "", hovered : false}
  },
  onMouseEnter : function(){
    this.setState({hovered : true}) // Set the state to hovered
    console.log("enter");
  },
  onMouseLeave : function(){
    this.setState({hovered : false}) // Set the state to not hovered
    console.log("leave");
  },
  render : function(){
    let GifStyle = {
      width : "100%",
      display : "block",
      margin : 0,
      float : "left",
      height : "auto" || this.props.height
    }

    let store = this;

    let overlayStatus = function(){
      if(store.state.hovered){
        return "block";
      }else{
        return "none"
      }
    }

    return (
      <div>
        <img src={this.props.src} style={GifStyle}></img>
        {/*<GifOverlay display={overlayStatus()}/>*/}
      </div>
    );
  }
});

module.exports = Gif;
